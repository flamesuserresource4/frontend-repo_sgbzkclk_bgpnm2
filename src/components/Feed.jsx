import React, { useMemo } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

export default function Feed({ posts, onLike, onComment }) {
  const gridCols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="sr-only">Feed</h2>
      <div className={`grid ${gridCols} gap-6`}>
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ring-1 ring-zinc-100 dark:ring-zinc-800 overflow-hidden transition hover:shadow-md">
            <div className="aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img src={post.image} alt={post.caption} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={post.user.avatar} alt={post.user.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{post.user.name}</p>
                    <p className="text-xs text-zinc-500">{post.time}</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                {post.caption}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <button onClick={() => onLike(post.id)} className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-rose-500">
                  <Heart className={`w-5 h-5 ${post.liked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-indigo-500">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments.length}</span>
                </button>
              </div>
              {post.comments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {post.comments.slice(0, 2).map((c, idx) => (
                    <div key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">{c.user}</span> {c.text}
                    </div>
                  ))}
                  {post.comments.length > 2 && (
                    <p className="text-xs text-zinc-500">View all {post.comments.length} comments</p>
                  )}
                </div>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.elements.namedItem('comment');
                  const value = input?.value?.toString()?.trim();
                  if (value) {
                    onComment(post.id, value);
                    input.value = '';
                  }
                }}
                className="mt-4"
              >
                <input
                  name="comment"
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full bg-zinc-100 dark:bg-zinc-800 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 dark:focus:ring-indigo-500/40 placeholder:text-zinc-400"
                />
              </form>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
