"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DebugInfo {
  loaded: boolean;
  time: string;
  envVars: Record<string, string>;
}

export default function DebugPage() {
  const [info, setInfo] = useState<DebugInfo>({
    loaded: true,
    time: new Date().toISOString(),
    envVars: {}
  });

  useEffect(() => {
    // Collect available environment variables (only NEXT_PUBLIC_ ones are accessible)
    const envVars: Record<string, string> = {};
    Object.keys(process.env).forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_')) {
        envVars[key] = process.env[key] ? 'Defined' : 'Undefined';
      }
    });

    setInfo(prev => ({
      ...prev,
      envVars
    }));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Debug Page</h1>
      <p>If you can see this, basic rendering is working!</p>
      
      <h2>Page Info</h2>
      <ul>
        <li>Page loaded: {info.loaded ? 'Yes' : 'No'}</li>
        <li>Load time: {info.time}</li>
      </ul>
      
      <h2>Environment Variables</h2>
      <p>Only NEXT_PUBLIC_ variables are visible:</p>
      <pre style={{ background: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
        {JSON.stringify(info.envVars, null, 2)}
      </pre>
      
      <h2>Navigation</h2>
      <p>
        <Link href="/" style={{ color: 'blue' }}>
          Return to home page
        </Link>
      </p>
    </div>
  );
} 