import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';

const timelineSteps = [
  {
    title: 'Pre-Race',
    color: 'bg-yellow-400 border-yellow-600',
    textColor: 'text-yellow-600',
    description: 'Grid formation, warm-up laps, strategy finalization, media build-up.',
  },
  {
    title: 'Race Start',
    color: 'bg-red-500 border-red-700',
    textColor: 'text-red-700',
    description: 'Lights out, race begins, first lap action, pit strategies unfold.',
  },
  {
    title: 'Post-Race',
    color: 'bg-green-500 border-green-700',
    textColor: 'text-green-700',
    description: 'Podium ceremony, interviews, analysis, results and celebrations.',
  },
];

export function RaceTimeline() {
  return (
    <Card className="w-full max-w-full rounded-none flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">Race Timeline</CardTitle>
        <CardDescription className="flex items-center gap-2">
          From pre-race build-up to post-race wrap-up
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-0 pb-4 relative">
          {/* Pre-Race */}
          <div className="flex items-center gap-4 relative">
            <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-gray-0 mx-auto" />

              <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600 z-10" />
              <div className="w-1 h-8 bg-gray-300 mx-auto" />
            </div>
            <div>
              <p className="text-lg font-bold text-yellow-600">Pre-Race</p>
              <p className="text-sm text-gray-400">
                Grid formation, warm-up laps, strategy finalization, media build-up.
              </p>
            </div>
          </div>
          {/* Race Start */}
          <div className="flex items-center gap-4 relative">
            <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-gray-300 mx-auto" />

              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-700 z-10" />
              <div className="w-1 h-8 bg-gray-300 mx-auto" />
            </div>
            <div>
              <p className="text-lg font-bold text-red-700">Race Start</p>
              <p className="text-sm text-gray-400">
                Lights out, race begins, first lap action, pit strategies unfold.
              </p>
            </div>
          </div>
          {/* Post-Race */}
          <div className="flex items-center gap-4 relative">
            <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-gray-300 mx-auto" />

              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-700 z-10" />
              <div className="w-1 h-8 bg-gray-0 mx-auto" />
            </div>
            <div>
              <p className="text-lg font-bold text-green-700">Post-Race</p>
              <p className="text-sm text-gray-400">
                Podium ceremony, interviews, analysis, results and celebrations.
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function RaceTimelineSlides() {
  const [step, setStep] = useState(0);

  const prevStep = () => setStep((s) => Math.max(0, s - 1));
  const nextStep = () => setStep((s) => Math.min(timelineSteps.length - 1, s + 1));

  const current = timelineSteps[step];

  return (
    <Card className="w-full max-w-full rounded-none flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">Race Timeline (Slides)</CardTitle>
        <CardDescription className="flex items-center gap-2">
          Step {step + 1} of {timelineSteps.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center py-8">
          <div className={`w-8 h-8 rounded-full border-4 ${current.color} mb-4`} />
          <p className={`text-xl font-bold mb-2 ${current.textColor}`}>{current.title}</p>
          <p className="text-gray-400 text-center max-w-md">{current.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between gap-2">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === timelineSteps.length - 1}
          className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50"
        >
          Next
        </button>
      </CardFooter>
    </Card>
  );
}
