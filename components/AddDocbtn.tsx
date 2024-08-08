"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room-actions';
import { useRouter } from 'next/navigation';



const AddDocbtn = ({ userId, email }: AddDocbtnProps) => {

  const router = useRouter();

  const addDocumentHandler = async () => {

    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/document/${room.id}`)
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <Button type="submit" onClick={addDocumentHandler} className='gradient-blue flex gap-1 shadow-md'>
      <Image src="/assets/icons/add.svg" alt='add document' width={24} height={24} />
      <p className='hidden sm:block'>Start a blank Document</p>
    </Button>
  )
}

export default AddDocbtn




