import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function FridaySession() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Free Practice 1</CardTitle>
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
          60 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        The weekend begins with FP1, a one-hour session where teams focus on baseline setup, systems
        checks, and initial tyre evaluation. Drivers learn the circuit, test braking points, and
        begin fine-tuning the car for the conditions.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function FridaySessionTwo() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Free Practice 2</CardTitle>
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
          60 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        FP2 often includes long-run simulations and higher-fuel performance testing. This session is
        usually held at the same time of day as qualifying or the race, making it valuable for
        understanding tyre behaviour and race-pace performance.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function SaturdaySession() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Free Practice 3</CardTitle>
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
          60 minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        FP3 is the final opportunity to refine car setup before competitive sessions begin. Teams
        run low-fuel programs and prepare for qualifying.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function SaturdaySessionTwo() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Qualifying</CardTitle>
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
          60 minutes
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent>
        Qualifying sets the grid for the race and is split into three sessions. It’s the fastest
        laps of the weekend, where timing, tyres, and precision decide the starting order.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function SundaySession() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Race Day</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 180 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path
              d="
    M30 150
    L40 80
    Q45 60 70 55
    Q110 45 120 30
    Q130 15 160 30
    Q170 40 150 60
    Q140 70 120 80
    Q100 90 110 110
    Q120 130 150 140
    Q170 145 150 160
    Q130 175 100 170
    Q60 165 30 150
  "
            />
          </svg>{' '}
          300 km or 2 hours max
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent>
        The race typically covers around 305 km (except Monaco) and lasts up to two hours. Strategy
        plays a vital role, involving tyre choices, pit-stop timing, and race-pace management.
        Points are awarded to the top ten finishers, contributing to the Drivers’ and Constructors’
        Championships.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function SprintQuali() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Sprint Qualifying</CardTitle>
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
          60 minutes
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent>
        Sprint Qualifying is a quick, three-part session that sets the grid for the Sprint Race.
        With shorter time limits and set tyre rules, drivers must push immediately, making it fast
        and intense.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}

export function SprintRace() {
  return (
    <Card className="w-full max-w-sm rounded-none flex flex-col h-80">
      <CardHeader>
        <CardTitle className="text-2xl">Sprint Race</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 180 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path
              d="
    M30 150
    L40 80
    Q45 60 70 55
    Q110 45 120 30
    Q130 15 160 30
    Q170 40 150 60
    Q140 70 120 80
    Q100 90 110 110
    Q120 130 150 140
    Q170 145 150 160
    Q130 175 100 170
    Q60 165 30 150
  "
            />
          </svg>{' '}
          100 km or 30 minutes max
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent>
        The Sprint Race is a short, flat-out race held on Saturday. It’s around 100 km with no
        mandatory pit stops, and awards points to the top finishers. The results set the grid for
        Sunday’s Grand Prix.{' '}
      </CardContent>

      <CardFooter className="flex-row gap-2"></CardFooter>
    </Card>
  );
}
