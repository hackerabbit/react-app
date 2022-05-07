/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 11:32:22
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-06 15:48:34
 * @Description: 
*/
import { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

interface IFile {
  type: string,
  size: number,
}

function beforeUpload(file: IFile): boolean | string {
  console.log(file)
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img: File, callback: (imgUrl: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}


function Avatar() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )


  const handleChange = (info: any) => {
    console.log(info)
    
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      console.log(info)
      getBase64(info.file.originFileObj, (imgUrl: string) => {
        setImageUrl(imgUrl);
      })
    }
  }

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="/api/upload"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  )
}

export default Avatar;
