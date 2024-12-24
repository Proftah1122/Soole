import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface CameraCaptureProps {
  onCapture: (photoUrl: string) => void;
  onClose: () => void;
}

export const CameraCapture = ({ onCapture, onClose }: CameraCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let stream: MediaStream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        
        const photoUrl = canvasRef.current.toDataURL('image/jpeg');
        onCapture(photoUrl);
      }
    }
  };

  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
      >
        <X size={24} />
      </button>
      
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full rounded-lg"
      />
      
      <canvas ref={canvasRef} className="hidden" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <AuthButton
          variant="primary"
          type="button"
          onClick={capturePhoto}
          className="w-full"
        >
          Take Photo
        </AuthButton>
      </div>
    </div>
  );
};