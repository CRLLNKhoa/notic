import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="font-bold text-xl mb-4">Địa chỉ truy cập đã hết hạn!</h1>
        <p>Bạn vui lòng chuyển sang truy cập với địa chỉ: https://check-rewind.vercel.app/</p>
        <a href="https://check-rewind.vercel.app/" className="bg-sky-600 text-white w-[120px] py-2 rounded-md mt-4 shadow-lg">Đi đến</a>
    </main>
  );
}
