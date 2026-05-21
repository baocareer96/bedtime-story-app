"use client";

import { useEffect, useRef, useState } from "react";
import { LoaderCircle, Volume2, VolumeX } from "lucide-react";

type AudioButtonProps = {
  text: string;
  audio?: string;
};

export function AudioButton({ text, audio }: AudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;

      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopPlayback = () => {
    audioRef.current?.pause();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }

    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }

    setIsPlaying(false);
  };

  const speakFallback = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const playAudio = async () => {
    setIsPlaying(true);

    if (!audio) {
      speakFallback();
      return;
    }

    const element = new Audio(audio);
    audioRef.current = element;

    element.onended = () => setIsPlaying(false);
    element.onerror = () => speakFallback();

    try {
      await element.play();
    } catch {
      speakFallback();
    }
  };

  const handlePress = async () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    await playAudio();
  };

  return (
    <button
      type="button"
      onClick={handlePress}
      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-cream-50 px-6 py-3 text-lg font-semibold text-night-900 shadow-lg transition hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/80"
      aria-label={isPlaying ? "Stop narration" : "Play narration"}
    >
      {isPlaying ? (
        <>
          <VolumeX className="h-5 w-5" />
          Stop narration
        </>
      ) : (
        <>
          {audio ? <Volume2 className="h-5 w-5" /> : <LoaderCircle className="h-5 w-5" />}
          {audio ? "Play narration" : "Read aloud"}
        </>
      )}
    </button>
  );
}
