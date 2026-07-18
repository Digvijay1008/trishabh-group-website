"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  mainImage?: { asset: { url: string } };
};

const PLACEHOLDER_COLORS = ["#D4C8B5", "#8C7B6B", "#98B8AC", "#C5B9A8", "#A89C8C"];

export default function BlogsPageClient({ posts }: { posts: Post[] }) {
  const hasPosts = posts && posts.length > 0;

  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-32 pb-32">
      <div className="container-luxury">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-[#E86F16]" />
            <span className="text-[#3F3F46]/60 text-[10px] tracking-[0.2em] uppercase font-inter">
              Journal & Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="text-[#161616]"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Stories of <em style={{ fontStyle: "italic", color: "#E86F16" }}>Excellence.</em>
          </motion.h1>
        </div>

        {/* Blog Grid or Empty State */}
        {!hasPosts ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-32 gap-6 text-center"
          >
            <Newspaper className="text-[#E7E2D9]" size={56} />
            <h3 className="font-cormorant text-3xl text-[#161616]/40">No articles yet</h3>
            <p className="font-inter text-sm text-[#3F3F46]/50 max-w-xs leading-relaxed">
              Articles published via the CMS will appear here automatically.
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 bg-[#161616] text-white text-[10px] tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#E86F16] transition-colors duration-300"
            >
              Go to Studio
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: EASE_OUT_EXPO }}
                className="group cursor-pointer flex flex-col h-full bg-white border border-[#E7E2D9] rounded-sm hover:border-[#E86F16]/30 hover:shadow-[0_8px_32px_-8px_rgba(22,22,22,0.08)] transition-all duration-500"
              >
                <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full">

                  {/* Image */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden">
                    {post.mainImage?.asset?.url ? (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{ backgroundColor: PLACEHOLDER_COLORS[idx % PLACEHOLDER_COLORS.length] }}
                      />
                    )}
                    <div className="absolute inset-0 bg-[#161616]/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-inter text-[10px] tracking-widest uppercase text-[#E86F16]">
                        {post.category}
                      </span>
                      <span className="font-inter text-[10px] tracking-wider text-[#3F3F46]/50">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                              day: "numeric", month: "long", year: "numeric",
                            })
                          : ""}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-2xl text-[#161616] leading-tight mb-4 group-hover:text-[#E86F16] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="font-inter text-sm text-[#3F3F46]/70 leading-relaxed mb-8 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[#161616] font-inter text-[11px] tracking-widest uppercase mt-auto">
                      Read Article
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
