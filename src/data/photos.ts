import type { ImageMetadata } from 'astro';
import portrait from '../assets/portrait.png';
import img1 from '../assets/travel/img1.jpg';
import img2 from '../assets/travel/img2.jpg';
import img3 from '../assets/travel/img3.jpg';
import img4 from '../assets/travel/img4.jpg';
import img5 from '../assets/travel/img5.jpg';
import img6 from '../assets/travel/img6.jpg';
import img7 from '../assets/travel/img7.jpg';
import img8 from '../assets/travel/img8.jpg';
import img9 from '../assets/travel/img9.jpg';
import img10 from '../assets/travel/img10.jpg';
import img11 from '../assets/travel/img11.jpg';
import img12 from '../assets/travel/img12.jpg';
import img13 from '../assets/travel/img13.jpg';
import img14 from '../assets/travel/img14.jpg';
import img15 from '../assets/travel/img15.jpg';
import img16 from '../assets/travel/img16.jpg';
import img17 from '../assets/travel/img17.jpg';
import img18 from '../assets/travel/img18.jpg';
import img19 from '../assets/travel/img19.jpg';
import img20 from '../assets/travel/img20.jpg';
import img21 from '../assets/travel/img21.jpg';
import img22 from '../assets/travel/img22.jpg';
import noteSpreadImage from '../assets/notes/javascriptin-3-silahsoru-spread-rest-destructuring/image-1.png';

export { portrait };

export const travelPhotos = [
  { src: portrait, alt: 'Serhat Koçhan portre fotoğrafı', width: 352, height: 391 },
  { src: img1, alt: 'Seyahat fotoğrafı 1', width: 352, height: 391 },
  { src: img2, alt: 'Seyahat fotoğrafı 2', width: 352, height: 391 },
  { src: img3, alt: 'Seyahat fotoğrafı 3', width: 352, height: 391 },
  { src: img4, alt: 'Seyahat fotoğrafı 4', width: 352, height: 391 },
  { src: img5, alt: 'Seyahat fotoğrafı 5', width: 352, height: 391 },
  { src: img6, alt: 'Seyahat fotoğrafı 6', width: 352, height: 391 },
  { src: img7, alt: 'Seyahat fotoğrafı 7', width: 352, height: 391 },
  { src: img8, alt: 'Seyahat fotoğrafı 8', width: 352, height: 391 },
  { src: img9, alt: 'Seyahat fotoğrafı 9', width: 352, height: 391 },
  { src: img10, alt: 'Seyahat fotoğrafı 10', width: 352, height: 391 },
  { src: img11, alt: 'Seyahat fotoğrafı 11', width: 352, height: 391 },
  { src: img12, alt: 'Seyahat fotoğrafı 12', width: 352, height: 391 },
  { src: img13, alt: 'Seyahat fotoğrafı 13', width: 352, height: 391 },
  { src: img14, alt: 'Seyahat fotoğrafı 14', width: 352, height: 391 },
  { src: img15, alt: 'Seyahat fotoğrafı 15', width: 352, height: 391 },
  { src: img16, alt: 'Seyahat fotoğrafı 16', width: 352, height: 391 },
  { src: img17, alt: 'Seyahat fotoğrafı 17', width: 352, height: 391 },
  { src: img18, alt: 'Seyahat fotoğrafı 18', width: 352, height: 391 },
  { src: img19, alt: 'Seyahat fotoğrafı 19', width: 352, height: 391 },
  { src: img20, alt: 'Seyahat fotoğrafı 20', width: 352, height: 391 },
  { src: img21, alt: 'Seyahat fotoğrafı 21', width: 352, height: 391 },
  { src: img22, alt: 'Seyahat fotoğrafı 22', width: 352, height: 391 },
] as const satisfies ReadonlyArray<{
  src: ImageMetadata;
  alt: string;
  width: number;
  height: number;
}>;

export const photoRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3] as const;

export const noteImages: Record<string, ImageMetadata> = {
  '/assets/notes/javascriptin-3-silahsoru-spread-rest-destructuring/image-1.png': noteSpreadImage,
};
