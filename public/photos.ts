import RoomOne1 from '@/public/Rooms/Room1-1.jpg';
import RoomOne2 from '@/public/Rooms/Room1-2.jpg';
import RoomOne3 from '@/public/Rooms/Room1-3.jpg';
import RoomOne4 from '@/public/Rooms/Room1-4.jpg';
import RoomOne5 from '@/public/Rooms/Room1-5.jpg';
import RoomOne6 from '@/public/Rooms/Room1-6.jpg';
import RoomOne7 from '@/public/Rooms/Room1-7.jpg';
import RoomTwo1 from '@/public/Rooms/Room2-1.jpg';
import RoomTwo2 from '@/public/Rooms/Room2-2.jpg';
import RoomTwo3 from '@/public/Rooms/Room2-3.jpg';
import RoomTwo4 from '@/public/Rooms/Room2-4.jpg';
import { StaticImageData } from 'next/image';

export type Rooms = {
	images: StaticImageData[];
};

const Room1 = {
	images: [
		RoomOne1,
		RoomOne2,
		RoomOne3,
		RoomOne4,
		RoomOne5,
		RoomOne6,
		RoomOne7,
	],
};

const Room2 = { images: [RoomTwo1, RoomTwo2, RoomTwo3, RoomTwo4] };

export { Room1, Room2 };
