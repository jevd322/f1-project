import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl uppercase">Q1</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          18 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        All 20 drivers are on track aiming to set fast lap times. At the end of the session, the
        slowest five drivers are eliminated and occupy grid positions 16–20.
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function CardQualiTwo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl uppercase">Q2</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          15 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        The remaining 15 drivers fight for a place in the final phase. Again, the slowest five are
        eliminated, taking grid positions 11–15.
      </CardContent>
    </Card>
  );
}

export function CardQualiThree() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl text-black uppercase">Q3</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-500"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          12 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        The top 10 drivers compete for pole position. The fastest driver earns the right to start
        from the front of the grid — a strategic advantage for the race.
      </CardContent>
    </Card>
  );
}
