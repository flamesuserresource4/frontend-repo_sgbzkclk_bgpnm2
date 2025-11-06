import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import Feed from './components/Feed';
import UploadModal from './components/UploadModal';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });
  const [query, setQuery] = useState('');
  const [uploadOpen, setUploadOpen] = useState(false);
  const [posts, setPosts] = useState(() => [
    {
      id: 'p1',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
      caption: 'Golden hour on the coast #sunset #ocean #travel',
      likes: 128,
      liked: false,
      time: '2h',
      user: {
        name: 'Ava Thompson',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
      },
      comments: [
        { user: 'Leo', text: 'Incredible colors!' },
        { user: 'Mina', text: 'This is dreamy ✨' },
        { user: 'Kai', text: 'Take me there.' },
      ],
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
      caption: 'City reflections #street #architecture',
      likes: 305,
      liked: true,
      time: '4h',
      user: {
        name: 'Noah Park',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      },
      comments: [
        { user: 'Ivy', text: 'The symmetry is perfect.' },
      ],
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
      caption: 'Studio vibes #creative #minimal',
      likes: 76,
      liked: false,
      time: '1d',
      user: {
        name: 'Luna Rivera',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
      },
      comments: [
        { user: 'Zed', text: 'So clean.' },
        { user: 'Pia', text: 'Love the tones.' },
      ],
    },
  ]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter((p) =>
      p.caption.toLowerCase().includes(q) ||
      p.user.name.toLowerCase().includes(q) ||
      (q.startsWith('#') && p.caption.toLowerCase().includes(q))
    );
  }, [posts, query]);

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) }
          : p
      )
    );
  };

  const handleComment = (postId, text) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, comments: [...p.comments, { user: 'You', text }] } : p
      )
    );
  };

  const handleUpload = ({ image, caption }) => {
    const newPost = {
      id: `p${Date.now()}`,
      image,
      caption: caption || 'Shared via PixGram',
      likes: 0,
      liked: false,
      time: 'now',
      user: {
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=You',
      },
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((v) => !v)}
        onSearchChange={setQuery}
        onOpenUpload={() => setUploadOpen(true)}
      />

      <HeroCover />

      <Feed posts={filteredPosts} onLike={handleLike} onComment={handleComment} />

      <UploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} onUpload={handleUpload} />

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} PixGram — A minimalist social showcase.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
