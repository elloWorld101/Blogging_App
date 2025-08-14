import { Skeleton } from "@/components/ui/skeleton"

export function IconSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full bg-gray-200" />
    </div>
    
  )
}
