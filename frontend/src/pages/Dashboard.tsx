import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";
import { Icon } from "../components/Icon";
import { Write } from "../components/Write";
import axios from "axios";
import { useRecoilState } from "recoil";
import { skeletonAtom } from "../store/atom";
import { SkeletonCN } from "../components/SkeletonCN";
import { BlogCard } from "@/components/BlogCard";
import { IconSkeleton } from "@/components/IconSkeleton";
import { userAtom } from "../store/atom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

interface BlogTypes {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}

export function Dashboard() {
  const [blogs, setBlogs] = useState<BlogTypes[]>([]);
  const [search, setSearch] = useState(" ");
  const [isSkeleton, setIsSkeleton] = useRecoilState(skeletonAtom);
  const [iconSkelton, setIconSkeleton] = useState(true);
  const holderName = useRecoilValue(userAtom);

  useEffect(() => {
    axios.get(`${BASE_URL}/blog/bulk`, {
      headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken")
      }
    },)
      .then(function (response) {
        const data = response.data;
        setIsSkeleton(false);
        setIconSkeleton(false);
        setBlogs(data.posts); //bro idhar data set hogaya hai
      })
      .catch((error) => {
        setIsSkeleton(false);
        alert(error);
      });
  }, [search]);

  // function useDebounce(value: string, delay: number) {
  //   let timer;

  //   useEffect(() => {
  //     timer = setTimeout(() => {
  //       console.log("Hello");
  //       setSearch(value);
  //     }, delay);

  //     return clearTimeout(timer);
  //   }, [value]);
  // }

  // const debounced = useDebounce(search, 500);

  return (
    <div>
      <div className="flex justify-between border-b-1 p-3 shadow-xs border-white">
        <div className="flex gap-3">
          <Logo />
          {/* <Search
            functionCalled={debounced} setter = {setSearch}
          />     
          {"Search Value" + search} */}
        </div>
        <div className="flex gap-4 items-center">
          <Write />
          {iconSkelton ? (
            <IconSkeleton />
          ) : (
            <Icon authorName={holderName || "Anonymous"} />
          )}
        </div>
      </div>

      <div className="mt-20">
        {isSkeleton ? <SkeletonCN /> : null}
        {blogs.map((blog) => {
          return (
            <Link
              to="/blog"
              state={{
                id: blog.id,
                holderName: holderName,
                authorName: blog.author.name,
              }}
            >
              <div className="mt-5">
                <BlogCard
                  title={blog.title}
                  authorName={blog.author.name || "Anonymous"}
                  content={blog.content}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
