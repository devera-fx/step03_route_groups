'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            My name is Najib ul Rehman Malik.
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>
    )
  }