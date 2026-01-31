export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        <div className="inline-block relative mb-4">
          <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
          <div className="h-12 w-12 rounded-full border-4 border-gray-900 border-t-transparent animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
