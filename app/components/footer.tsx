export default function Footer() {
  const dev = "Fr3d"
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center">
          <p>Criado por {dev}</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
