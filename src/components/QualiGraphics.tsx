import {
  Card,
  CardContentGfx,
  CardDescriptionGfx,
  CardFooterGfx,
  CardHeaderGfx,
  CardTitle,
} from './ui/card';
import { Separator } from '@radix-ui/react-separator';

export function QualiGFX() {
  return (
    <Card className="w-full max-w-sm bg-gfx-blackbg text-white border-none">
      <CardHeaderGfx className="">
        <CardTitle className="text-2xl uppercase flex items-center pl-2">19</CardTitle>
        <div className="flex flex-row gap-2">
          <span className="flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#000100ff" strokeWidth="4" fill="#49ca35ff" />
            </svg>
          </span>
          <CardDescriptionGfx className="uppercase">Bortoleto</CardDescriptionGfx>
        </div>
        <CardDescriptionGfx className="text-xl ml-auto pr-2">S</CardDescriptionGfx>
      </CardHeaderGfx>
      <Separator className="bg-green-400 h-1 border-0" />
      <CardContentGfx>
        <h2 className="flex items-center text-4xl font-black">1:17.4</h2>
        <div className="flex flex-col items-center font-bold text-xl">
          <h3 className="">1:23.394</h3>
          <h4 className="text-xl text-gray-400 uppercase w-fit">Hamilton</h4>
        </div>
      </CardContentGfx>

      <CardFooterGfx className="grid grid-cols-3">
        <div>
          <h2 className="flex justify-center">S1</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>
        <div className="w-">
          <h2 className="flex justify-center">S2</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>

        <div className="w-">
          <h2 className="flex justify-center">S3</h2>
          <Separator className="bg-gray-600 h-1 mt-1" />
        </div>
      </CardFooterGfx>
    </Card>
  );
}
