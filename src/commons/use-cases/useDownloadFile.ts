import { MimeFileTypes } from '@commons/models/MimeFileTypes.ts';

export const useDownloadFile = () => {
   return (blob: Blob, fileName: string, fileType: MimeFileTypes) => {
      const newBlob = new Blob([blob], { type: fileType });

      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = fileName;
      link.click();

      setTimeout(() => {
         window.URL.revokeObjectURL(data);
      }, 100);
   }
}
