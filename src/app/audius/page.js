"use client";

import AudiusPlayer from "@/components/AudiusPlayer";

export default function AudiusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <AudiusPlayer />
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for music lovers</span>
            </div>


          </div>
        </div>
      </footer>
    </div>
  );
}
