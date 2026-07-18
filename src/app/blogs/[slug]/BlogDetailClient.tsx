"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

type Block = {
  _type: string;
  style?: string;
  children?: { text: string; marks?: string[] }[];
};

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  body: Block[];
  mainImage?: { asset: { url: string } };
};

// Minimal portable text renderer
function renderBody(blocks: Block[]) {
  if (!blocks) return null;
  return blocks.map((block, idx) => {
    if (block._type !== "block") return null;
    const text = block.children?.map((c) => c.text).join("") ?? "";
    const style = block.style ?? "normal";

    const base = "font-inter text-[#3F3F46] leading-relaxed";

    if (style === "h2") return <h2 key={idx} className="font-cormorant text-3xl text-[#161616] mt-10 mb-4" style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>{text}</h2>;
    if (style === "h3") return <h3 key={idx} className="font-cormorant text-2xl text-[#161616] mt-8 mb-3" style={{ fontWeight: 400 }}>{text}</h3>;
    if (style === "blockquote") return (
      <blockquote key={idx} className="border-l-2 border-[#E86F16] pl-6 my-8 italic font-cormorant text-xl text-[#161616]/70">
        {text}
      </blockquote>
    );
    if (!text.trim()) return <div key={idx} className="h-4" />;
    return <p key={idx} className={`${base} text-base mb-5`}>{text}</p>;
  });
}

export default function BlogDetailClient({ post }: { post: Post }) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        day: "numeric", month: "long", year: "numeric",
      })
    : "";

  return (
    <article className="bg-[#FAF9F7] min-h-screen pb-24">

      {/* Hero image */}
      <div className="w-full aspect-[21/8] relative bg-[#D4C8B5] overflow-hidden">
        {post.mainImage?.asset?.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-12 pb-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#3F3F46]/60 hover:text-[#E86F16] transition-colors duration-200 text-[11px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              <ArrowLeft size={13} />
              Back to Journal
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-5 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 text-[#E86F16] text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-josefin)" }}>
              <Tag size={11} />
              {post.category}
            </span>
            <span className="text-[#3F3F46]/40 text-[10px]">·</span>
            <span className="inline-flex items-center gap-1.5 text-[#3F3F46]/50 text-[10px] tracking-wider" style={{ fontFamily: "var(--font-josefin)" }}>
              <CalendarDays size={11} />
              {formattedDate}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-6"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          {post.excerpt && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/70 text-lg leading-relaxed mb-10 pb-10 border-b border-[#E7E2D9]"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {post.excerpt}
            </motion.p>
          )}

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
          >
            {renderBody(post.body)}
          </motion.div>

          {/* Footer CTA */}
          <div className="mt-16 pt-12 border-t border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-cormorant text-2xl text-[#161616]">Interested in a project?</p>
              <p className="font-inter text-sm text-[#3F3F46]/60 mt-1">Schedule a private site visit with our team.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 flex-shrink-0"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "13px 26px",
              }}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}
