import { useState } from 'react';
import {
  Card,
  CardContentGfx,
  CardDescriptionGfx,
  CardFooterGfx,
  CardHeaderGfx,
  CardTitle,
} from './ui/card';
import { Separator } from '@radix-ui/react-separator';

type ClickableElement =
  | 'position'
  | 'driver'
  | 'lapTime'
  | 'sector1'
  | 'sector2'
  | 'sector3'
  | 'tyreCompound'
  | 'deltaTime'
  | 'comparison'
  | 'statusBar'
  | null;

interface QualiGFXProps {
  selectedElement?: ClickableElement;
  onElementClick?: (element: ClickableElement) => void;
}

export function QualiGFX({ selectedElement = null, onElementClick }: QualiGFXProps) {
  const handleClick = (element: ClickableElement) => (e: React.MouseEvent) => {
    e.stopPropagation();
    onElementClick?.(element);
  };

  return (
    <Card className="w-full max-w-sm bg-gfx-blackbg text-white border-none">
      <CardHeaderGfx className="">
        {/* Clickable Position */}
        <CardTitle
          className={`text-2xl uppercase flex items-center pl-2 cursor-pointer transition-all rounded px-2 py-1 ${
            selectedElement === 'position' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('position')}
        >
          19
        </CardTitle>

        {/* Clickable Driver Name */}
        <div
          className={`flex flex-row gap-2 cursor-pointer transition-all rounded px-2 py-1 ${
            selectedElement === 'driver' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('driver')}
        >
          <span className="flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#000100ff" strokeWidth="4" fill="#49ca35ff" />
            </svg>
          </span>
          <CardDescriptionGfx className="uppercase">Bortoleto</CardDescriptionGfx>
        </div>

        {/* Clickable Tyre Compound */}
        <CardDescriptionGfx
          className={`text-xl ml-auto pr-2 cursor-pointer transition-all rounded px-2 py-1 ${
            selectedElement === 'tyreCompound' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('tyreCompound')}
        >
          S
        </CardDescriptionGfx>
      </CardHeaderGfx>

      {/* Clickable Status Bar */}
      <Separator
        className={`h-1 border-0 cursor-pointer transition-all ${
          selectedElement === 'statusBar' ? 'bg-yellow-400' : 'bg-green-400 hover:bg-green-500'
        }`}
        onClick={handleClick('statusBar')}
      />

      <CardContentGfx>
        {/* Clickable Lap Time */}
        <h2
          className={`flex items-center text-4xl font-black cursor-pointer transition-all rounded px-2 py-1 ${
            selectedElement === 'lapTime' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('lapTime')}
        >
          1:17.4
        </h2>
        <div className="flex flex-col items-center font-bold text-xl">
          {/* Clickable Delta Time */}
          <h3
            className={`cursor-pointer transition-all rounded px-2 ${
              selectedElement === 'deltaTime' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
            }`}
            onClick={handleClick('deltaTime')}
          >
            1:23.394
          </h3>
          {/* Clickable Comparison Driver */}
          <h4
            className={`text-xl text-gray-400 uppercase w-fit cursor-pointer transition-all rounded px-2 ${
              selectedElement === 'comparison' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
            }`}
            onClick={handleClick('comparison')}
          >
            Hamilton
          </h4>
        </div>
      </CardContentGfx>

      <CardFooterGfx className="grid grid-cols-3">
        {/* Clickable Sector 1 */}
        <div
          className={`cursor-pointer transition-all py-1 ${
            selectedElement === 'sector1' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('sector1')}
        >
          <h2 className="flex justify-center">S1</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>

        {/* Clickable Sector 2 */}
        <div
          className={`cursor-pointer transition-all py-1 ${
            selectedElement === 'sector2' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('sector2')}
        >
          <h2 className="flex justify-center">S2</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>

        {/* Clickable Sector 3 */}
        <div
          className={`cursor-pointer transition-all py-1 ${
            selectedElement === 'sector3' ? 'bg-yellow-400 text-gray-900' : 'hover:bg-gray-800'
          }`}
          onClick={handleClick('sector3')}
        >
          <h2 className="flex justify-center">S3</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>
      </CardFooterGfx>
    </Card>
  );
}

// Wrapper component with two-column layout
export function QualiGFXWithDetails() {
  const [selectedElement, setSelectedElement] = useState<ClickableElement>('sector1');

  const handleElementClick = (element: ClickableElement) => {
    setSelectedElement(selectedElement === element ? null : element);
  };

  const getDetailsContent = () => {
    switch (selectedElement) {
      case 'position':
        return {
          title: 'Current Qualifying Position',
          content: (
            <>
              <p>
                This part of the graphics displays the current position of the Driver in the
                qualifying session.
              </p>
            </>
          ),
        };
      case 'driver':
        return {
          title: 'Driver Name and Team Logo',
          content: (
            <>
              <p>In this section, you can see the driver's name and their team logo.</p>
            </>
          ),
        };
      case 'lapTime':
        return {
          title: 'Lap Timer',
          content: (
            <>
              <p>This is the current lap time of the driver</p>
            </>
          ),
        };
      case 'sector1':
        return {
          title: 'Sector 1',
          content: (
            <>
              <p>This display is used to show how well the driver is performing in Sector 1.</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div>
                  <h2 className="flex justify-center text-yellow-400">S1</h2>
                  <Separator className="bg-yellow-400 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-green-500">S1</h2>
                  <Separator className="bg-green-500 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-purple-600">S1</h2>
                  <Separator className="bg-purple-600 h-1 mt-1" />
                </div>
              </div>
              <p>
                <strong className="text-yellow-400">Yellow</strong> - The driver's sector time is
                slower than their personal best in this session.
              </p>
              <p>
                <strong className="text-green-500">Green</strong> - The driver's sector time is
                their personal best in this session, but not the overall best.
              </p>
              <p>
                <strong className="text-purple-600">Purple</strong> - The driver's sector time is
                currently the best sector time of all drivers in this session.
              </p>
            </>
          ),
        };
      case 'sector2':
        return {
          title: 'Sector 2',
          content: (
            <>
              <p>This display is used to show how well the driver is performing in Sector 2.</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div>
                  <h2 className="flex justify-center text-yellow-400">S2</h2>
                  <Separator className="bg-yellow-400 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-green-500">S2</h2>
                  <Separator className="bg-green-500 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-purple-600">S2</h2>
                  <Separator className="bg-purple-600 h-1 mt-1" />
                </div>
              </div>
              <p>
                <strong className="text-yellow-400">Yellow</strong> - The driver's sector time is
                slower than their personal best in this session.
              </p>
              <p>
                <strong className="text-green-500">Green</strong> - The driver's sector time is
                their personal best in this session, but not the overall best.
              </p>
              <p>
                <strong className="text-purple-600">Purple</strong> - The driver's sector time is
                currently the best sector time of all drivers in this session.
              </p>
            </>
          ),
        };
      case 'sector3':
        return {
          title: 'Sector 3',
          content: (
            <>
              <p>This display is used to show how well the driver is performing in Sector 3.</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div>
                  <h2 className="flex justify-center text-yellow-400">S3</h2>
                  <Separator className="bg-yellow-400 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-green-500">S3</h2>
                  <Separator className="bg-green-500 h-1 mt-1" />
                </div>

                <div>
                  <h2 className="flex justify-center text-purple-600">S3</h2>
                  <Separator className="bg-purple-600 h-1 mt-1" />
                </div>
              </div>
              <p>
                <strong className="text-yellow-400">Yellow</strong> - The driver's sector time is
                slower than their personal best in this session.
              </p>
              <p>
                <strong className="text-green-500">Green</strong> - The driver's sector time is
                their personal best in this session, but not the overall best.
              </p>
              <p>
                <strong className="text-purple-600">Purple</strong> - The driver's sector time is
                currently the best sector time of all drivers in this session.
              </p>
            </>
          ),
        };
      case 'tyreCompound':
        return {
          title: 'Tyre Compound',
          content: (
            <>
              <p>
                This part of the graphics displays the current tyre compound being used by the
                Driver.
              </p>
              <div className="mt-2 space-y-1">
                <p>
                  <strong className="text-red-600">S</strong> - for Soft tyre compound
                </p>
                <p>
                  <strong className="text-yellow-500 rounded-100">M</strong> - for Medium tyre
                  compound
                </p>
                <p>
                  <strong className="text-gray-100">H</strong> - for Hard tyre compound
                </p>
                <p>
                  <strong className="text-blue-500">W</strong> - for Wet tyre compound
                </p>
                <p>
                  <strong className="text-green-500">I</strong> - for Intermediate tyre compound
                </p>
              </div>
            </>
          ),
        };
      case 'deltaTime':
        return {
          title: 'Sector Time',
          content: (
            <>
              <p>
                This section displays the sector time of the driver they need to beat in order to
                qualify.
              </p>
              <p>
                Drivers can vary their performances across different sectors, depending on their car
                setup and driving style.
              </p>
            </>
          ),
        };
      case 'comparison':
        return {
          title: 'The Driver to Beat',
          content: (
            <>
              <p>
                The driver currently needed to beat. Also the current driver that is on the brink of
                elimination.
              </p>
            </>
          ),
        };
      case 'statusBar':
        return {
          title: 'Team Colour Bar',
          content: (
            <>
              <p>This coloured bar indicates the driver's current team.</p>
            </>
          ),
        };
      default:
        return null;
    }
  };

  const detailsContent = getDetailsContent();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] gap-6">
      {/* Left column - Clickable card */}
      <div>
        <QualiGFX selectedElement={selectedElement} onElementClick={handleElementClick} />
      </div>

      {/* Right column - Details panel */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 min-h-[100px] h-fit">
        {detailsContent ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-yellow-400">{detailsContent.title}</h2>
              <button
                onClick={() => setSelectedElement(null)}
                className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-all"
              >
                Clear
              </button>
            </div>
            <div className="space-y-4 text-gray-300">{detailsContent.content}</div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Click on any element to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
