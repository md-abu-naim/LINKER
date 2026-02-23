export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 z-50">
  <div className="flex space-x-2">
    <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
    <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce delay-150"></div>
    <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce delay-300"></div>
  </div>
</div>
    )
}