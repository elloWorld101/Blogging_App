import { Skeleton } from "@/components/ui/skeleton"

export function BlogCardSkeleton() {
  return (
    <div className="space-y-15 mt-20">
      <div className="flex gap-10 justify-center">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 space-y-4">
            <div className="my-auto"> 
              <Skeleton className="h-10 w-10 rounded-full bg-gray-200 " />
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-200 rounded-none" />
            </div>
          </div>
          
          <div className="space-y-4">
            <Skeleton className="h-8 w-[750px] bg-gray-200 rounded-none" />
            <Skeleton className="h-4 w-[550px] bg-gray-200 rounded-none mt-10" />
            <Skeleton className="h-4 w-[600px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[500px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[450px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[550px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[600px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[500px] bg-gray-200 rounded-none mt-3" />
            <Skeleton className="h-4 w-[450px] bg-gray-200 rounded-none mt-3" />

            <Skeleton className="h-3 w-[100px] bg-gray-200 rounded-none mt-3" />
          </div>
        </div>

      </div>
    </div>
  )
}
