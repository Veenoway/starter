'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HomeModule() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanUsername = username.trim().replace('@', '');
    
    if (!cleanUsername) {
      setError('Please enter a username');
      return;
    }

    if (cleanUsername.length < 1 || cleanUsername.length > 15) {
      setError('Invalid username');
      return;
    }

    setIsLoading(true);
    router.push(`/${cleanUsername}`);
  };

  return (
    <main className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-zama-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zama-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zama-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zama-primary flex items-center justify-center">
              {/* <Shield className="w-6 h-6 text-zama-dark" /> */}
            </div>
            <span className="font-display font-bold text-xl text-white">Zama Score</span>
          </div>
          <a
            href="https://twitter.com/zama_fhe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zama-muted hover:text-zama-primary transition-colors text-sm"
          >
            @zama_fhe
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zama-primary/10 border border-zama-primary/20 mb-8">
              {/* <Sparkles className="w-4 h-4 text-zama-primary" /> */}
              <span className="text-zama-primary text-sm font-medium">Zama Creator Program</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Discover Your</span>
            <br />
            <span className="text-gradient">Creator Score</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zama-muted text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Track your FHE advocacy on Twitter. See your engagement metrics, 
            unlock achievement levels, and share your privacy champion card.
          </motion.p>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-zama-muted text-lg">@</span>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="your_twitter_handle"
                className="w-full pl-10 pr-32 py-4 bg-zama-card border border-zama-border rounded-2xl 
                         text-white placeholder-zama-muted text-lg font-mono
                         focus:outline-none focus:border-zama-primary focus:ring-2 focus:ring-zama-primary/20
                         transition-all duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 
                         bg-zama-primary text-zama-dark font-semibold rounded-xl
                         hover:bg-zama-accent transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-zama-dark/30 border-t-zama-dark rounded-full animate-spin" />
                ) : (
                  <>
                    {/* <Search className="w-4 h-4" /> */}
                    <span>Check</span>
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-3"
              >
                {error}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Track Engagement',
                description: 'Monitor your likes, retweets, replies and views on Zama-related tweets',
              },
              {
                icon: '🏆',
                title: 'Unlock Levels',
                description: 'Rise from FHE Curious to Privacy Legend with 5 achievement tiers',
              },
              {
                icon: '⚡',
                title: 'Share Your Card',
                description: 'Generate a shareable card showcasing your creator score and stats',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="card-glass rounded-2xl p-6 hover:border-zama-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zama-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-zama-muted text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Preview */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-display text-2xl font-bold text-white text-center mb-8"
          >
            Achievement Levels
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { name: 'FHE Curious', badge: '🔍', color: 'bg-gray-500' },
              { name: 'Privacy Advocate', badge: '🛡️', color: 'bg-blue-500' },
              { name: 'Encryption Expert', badge: '🔐', color: 'bg-purple-500' },
              { name: 'FHE Ambassador', badge: '⭐', color: 'bg-amber-500' },
              { name: 'Privacy Legend', badge: '👑', color: 'bg-zama-primary' },
            ].map((level, i) => (
              <div
                key={level.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zama-card border border-zama-border"
              >
                <span className="text-lg">{level.badge}</span>
                <span className="text-sm text-zama-text">{level.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-zama-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zama-muted text-sm">
            Built for the{' '}
            <a
              href="https://twitter.com/zama_fhe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zama-primary hover:underline"
            >
              Zama Creator Program
            </a>
            {' '}• Powered by FHE 🔐
          </p>
        </div>
      </footer>
    </main>
  );
}