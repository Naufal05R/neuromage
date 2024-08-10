import React from 'react'
import { useToast } from '../ui/use-toast'
import { CldUploadWidget } from 'next-cloudinary'

const MediaUploader = () => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Image upload successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  }
  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading',
      description: 'Please try again',
      duration: 5000,
      className: 'error-toast',
    })
  }

  return (
    <CldUploadWidget 
        uploadPreset='neuromage'
        options={{
            multiple: false,
            resourceType: 'image',
        }}
        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
    />
  )
}

export default MediaUploader
