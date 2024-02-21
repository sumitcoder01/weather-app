export default function TempCardSkeleton() {
    return (
        <div className="min-w-72 mx-auto rounded-md py-4 px-5 shadow-lg bg-gray-300 text-gray-300 mb-5 animate-pulse">
            <div className="text-xl mb-2 h-6 w-1/2 bg-gray-400 rounded"></div>
            <div className="flex items-center space-x-4">
                <div className="h-20 w-20 bg-gray-400 rounded-full"></div>
                <div className="text-lg">
                    <div className="font-bold mb-1 h-4 w-1/2 bg-gray-400 rounded"></div>
                    <div className="text-sm h-3 w-1/4 bg-gray-400 rounded"></div>
                </div>
            </div>
            <div className="px-6 py-3">
                <div className="text-lg mb-1 h-6 w-1/4 bg-gray-400 rounded"></div>
                <div className="font-bold text-lg mb-1 h-6 w-1/4 bg-gray-400 rounded"></div>
                <div className="space-y-1 text-sm">
                    <div className="h-3 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-400 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
    )
}
