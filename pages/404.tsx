import Image from 'next/image';
import PawIcon from '../components/svg/PawIcon';
import DogLogo from '../public/dog.png';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center relative h-full">
      <PawIcon className="w-auto md:w-[153px] h-[149px] rotate-[-14.955deg] text-[#F8F5F3] top- absolute z-0" />
      <Image
        src={DogLogo}
        alt="paw-logo"
        className="w-[170px] h-[120.434px] z-10"
      />

      <p className="text-[#333] font-semibold capitalize z-10">
        Sitio en construcción
      </p>
    </div>
  );
}
