import TempCardSkeleton from "./tempCardSkeleton/TempCardSkeleton";

export default function weatherListSkeleton() {
    return (
        <div className="container flex mt-4 justify-center flex-wrap gap-8 mb-2 md:flex-row flex-col">
            {[...Array(4)].map((_, index) => (
                <TempCardSkeleton key={index} />
            ))}
        </div>
    )
}
