import React, { useRef, useState } from 'react';
import { X, Upload } from 'lucide-react';

export default function UploadModal({ open, onClose, onUpload }) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-xl ring-1 ring-zinc-100 dark:ring-zinc-800">
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Create new post</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="aspect-square w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-300"
              >
                <Upload className="w-8 h-8" />
                <span className="text-sm">Upload an image</span>
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setPreview(url);
                }
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-zinc-800 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 dark:focus:ring-indigo-500/40 placeholder:text-zinc-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 p-4 border-t border-zinc-200 dark:border-zinc-800">
          <button onClick={onClose} className="px-4 py-2 text-sm rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">Cancel</button>
          <button
            onClick={() => {
              if (preview) {
                onUpload({ image: preview, caption });
                setPreview(null);
                setCaption('');
                onClose();
              }
            }}
            className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
