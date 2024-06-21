"use client";
import React, { useState } from "react";

export default function FileUpload({ setFormData, formData }) {
  const [imageNames, setImageNames] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) {
      setFormData({
        ...formData,
        files: files,
      });
      setImageNames(files.map(file => file.name));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setFormData({
        ...formData,
        files: files,
      });
      setImageNames(files.map(file => file.name));
    }
  };

  return (
      <div className="mb-6">
        <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
          Image, Video, Audio, or 3D Model<span className="text-red">*</span>
        </label>
        <p className="mb-3 text-2xs dark:text-jacarta-300">
          {imageNames.length === 0 ? (
              "Drag or choose your files to upload"
          ) : (
              <span className="text-green">Successfully Uploaded {imageNames.join(', ')}</span>
          )}
        </p>

        <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              border: dragging ? "2px dashed #000" : "",
              borderRadius: "5px",
            }}
            className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-[#4A4A4A]/90 dark:bg-[#4A4A4A]"
        >
          <div className="relative z-10 cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mb-4 inline-block fill-jacarta-500 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
            </svg>
            <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">
              JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
            </p>
          </div>
          <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-[#4A4A4A]/90"></div>
          <div></div>
          <input
              type="file"
              accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
              id="file-upload"
              multiple
              onChange={handleImageChange}
              className="absolute inset-0 z-20 cursor-pointer opacity-0"
          />
        </div>
      </div>
  );
}
