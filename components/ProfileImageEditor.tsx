import React, { useState, useRef } from 'react';
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from 'react-image-crop';
import { CameraIcon } from './Icons';

interface ProfileImageEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imageDataUrl: string) => void;
}

// Function to generate a circular cropped image as a base64 string
function getCroppedImg(
  image: HTMLImageElement,
  crop: Crop
): Promise<string> {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  
  const targetSize = crop.width;
  canvas.width = targetSize;
  canvas.height = targetSize;
  
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return Promise.reject(new Error('Canvas context is not available.'));
  }
  
  ctx.imageSmoothingQuality = 'high';
  
  // Draw the circular clipping path
  ctx.beginPath();
  ctx.arc(targetSize / 2, targetSize / 2, targetSize / 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.clip();

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    targetSize,
    targetSize
  );

  // Return the data URL
  return new Promise((resolve) => {
    resolve(canvas.toDataURL('image/png'));
  });
}


const ProfileImageEditor: React.FC<ProfileImageEditorProps> = ({ isOpen, onClose, onSave }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<Crop>();
    const imgRef = useRef<HTMLImageElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined); // Makes crop preview update between images.
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    
    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const crop = centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                1, // 1:1 aspect ratio
                width,
                height
            ),
            width,
            height
        );
        setCrop(crop);
    };

    const handleSaveCrop = async () => {
        if (completedCrop?.width && completedCrop?.height && imgRef.current) {
            try {
                const croppedImageUrl = await getCroppedImg(
                    imgRef.current,
                    completedCrop
                );
                onSave(croppedImageUrl);
                handleClose();
            } catch (e) {
                console.error("Error cropping image:", e);
            }
        }
    };
    
    const handleClose = () => {
        setImgSrc('');
        setCrop(undefined);
        setCompletedCrop(undefined);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4" aria-modal="true" role="dialog" onClick={handleClose}>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-violet-900/20 w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale" onClick={(e) => e.stopPropagation()}>
                <style>
                  {`
                    @keyframes fade-in-scale {
                      from { opacity: 0; transform: scale(0.95); }
                      to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in-scale { animation: fade-in-scale 0.2s ease-out forwards; }
                  `}
                </style>
                <div className="flex justify-between items-center p-5 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-white">Update Profile Picture</h2>
                    <button onClick={handleClose} className="text-slate-400 hover:text-white transition-colors text-2xl leading-none" aria-label="Close modal">&times;</button>
                </div>

                <div className="p-6 overflow-y-auto">
                    {!imgSrc ? (
                        <div 
                          className="w-full h-64 border-2 border-dashed border-slate-700 rounded-lg flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:border-violet-500 hover:bg-slate-800/50 transition-colors"
                          onClick={() => fileInputRef.current?.click()}
                          onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                          tabIndex={0}
                          role="button"
                          aria-label="Select an image to upload"
                        >
                          <CameraIcon className="w-12 h-12 mb-4" />
                          <p className="font-semibold">Click or press Enter to select an image</p>
                          <p className="text-sm">PNG, JPG, or GIF</p>
                          <input type="file" accept="image/*" onChange={onSelectFile} ref={fileInputRef} className="hidden" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <ReactCrop
                                crop={crop}
                                onChange={c => setCrop(c)}
                                onComplete={c => setCompletedCrop(c)}
                                aspect={1}
                                circularCrop
                                keepSelection
                            >
                                <img
                                    ref={imgRef}
                                    alt="Image to crop"
                                    src={imgSrc}
                                    onLoad={onImageLoad}
                                    style={{ maxHeight: '60vh', display: 'block' }}
                                />
                            </ReactCrop>
                        </div>
                    )}
                </div>

                <div className="p-5 border-t border-slate-800 flex justify-end items-center gap-4 mt-auto">
                    {imgSrc && (
                        <button
                           onClick={() => fileInputRef.current?.click()}
                           className="text-sm text-slate-400 hover:text-white mr-auto"
                        >
                            Change Image
                        </button>
                    )}
                    <button 
                        onClick={handleClose}
                        className="group relative inline-flex items-center justify-center px-6 py-2 text-md font-bold text-slate-300 transition-all duration-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-violet-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSaveCrop}
                        disabled={!completedCrop?.width || !completedCrop?.height}
                        className="group relative inline-flex items-center justify-center px-6 py-2 text-md font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none disabled:cursor-not-allowed"
                    >
                         <div className="absolute -inset-px bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg transition-all duration-200 group-hover:shadow-[0_0_1rem_0.1rem_#a855f7] group-hover:-inset-1 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none"></div>
                        <span className="relative">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProfileImageEditor;
