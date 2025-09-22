// app/ui/fonts.tsx
import { Inter } from "next/font/google";

// import font Inter từ Google Fonts
export const inter = Inter({
  subsets: ["latin"],     // subset cần thiết, ở đây chỉ lấy latin
  display: "swap",        // cải thiện hiệu suất render font
  variable: "--font-inter" // nếu muốn dùng dưới dạng CSS variable
});
    