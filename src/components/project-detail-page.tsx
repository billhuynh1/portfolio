import React from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

interface ProjectDetailProps {
  project: {
    title: string;
    tagline?: string;
    dates: string;
    demoUrl?: string;
    githubUrl?: string;
    video?: string;
    image?: string;
    technologies: readonly string[];
    problem?: string;
    features?: readonly string[];
    screenshots?: readonly {
      readonly url: string;
      readonly caption: string;
      readonly type?: "image" | "video";
    }[];
    technical?: string;
    learnings?: string;
    results?: string;
    href?: string;
    description?: string;
    featured?: boolean;
    active?: boolean;
    links?: readonly any[];
  };
}

const BLUR_FADE_DELAY = 0.04;

export default function ProjectDetailPage({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {/* Back Navigation */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <a
            href="/#projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </a>
        </BlurFade>

        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight">
                {project.title}
              </h1>
            </BlurFade>

            {project.tagline && (
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-xl text-muted-foreground">
                  {project.tagline}
                </p>
              </BlurFade>
            )}

            {/* Date & Tech Stack */}
            <div className="space-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm text-muted-foreground">{project.dates}</p>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BlurFade>
            </div>

            {/* Action Buttons */}
            {(project.demoUrl || project.githubUrl) && (
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </BlurFade>
            )}
          </div>
        </section>

        {/* Demo Video or Image */}
        {(project.video || project.image) && (
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <section>
              <div className="w-full rounded-lg overflow-hidden border shadow-sm bg-card">
                {project.video ? (
                  <video controls className="w-full" preload="metadata">
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                ) : null}
              </div>
            </section>
          </BlurFade>
        )}

        {/* The Problem */}
        {project.problem && (
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">The Problem</h2>
              <div className="prose prose-sm max-w-full text-muted-foreground">
                {project.problem.split("\n\n").map((paragraph, idx) => (
                  <p className="text-base" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </BlurFade>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-base text-muted-foreground"
                  >
                    <span className="mr-3 mt-1 text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </BlurFade>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section>
            <div className="grid gap-6">
              {project.screenshots.map((screenshot, idx) => {
                const isVideo =
                  screenshot.type === "video" ||
                  screenshot.url.match(/\.(mp4|webm|mov)$/i);

                return (
                  <BlurFade key={idx} delay={BLUR_FADE_DELAY * (10 + idx)}>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-card">
                      {isVideo ? (
                        <video
                          controls
                          className="w-full h-96 object-cover"
                          preload="metadata"
                        >
                          <source src={screenshot.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={screenshot.url}
                          alt={screenshot.caption}
                          className="w-full h-96 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {screenshot.caption}
                        </p>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </section>
        )}

        {/* Technical Implementation */}
        {project.technical && (
          <BlurFade
            delay={BLUR_FADE_DELAY * (10 + (project.screenshots?.length || 0))}
          >
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Technical Implementation</h2>
              <div className="prose prose-sm max-w-full text-muted-foreground">
                {project.technical.split("\n\n").map((paragraph, idx) => (
                  <p className="text-base" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </BlurFade>
        )}

        {/* Results */}
        {project.results && (
          <BlurFade
            delay={BLUR_FADE_DELAY * (11 + (project.screenshots?.length || 0))}
          >
            <section>
              <div className="rounded-lg bg-muted p-6 space-y-2">
                <h2 className="text-2xl font-bold">Results</h2>
                <p className="text-base text-muted-foreground">
                  {project.results}
                </p>
              </div>
            </section>
          </BlurFade>
        )}

        {/* What I Learned */}
        {project.learnings && (
          <BlurFade
            delay={BLUR_FADE_DELAY * (12 + (project.screenshots?.length || 0))}
          >
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">What I Learned</h2>
              <div className="prose prose-sm max-w-full text-muted-foreground">
                {project.learnings.split("\n\n").map((paragraph, idx) => (
                  <p className="text-base" key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </BlurFade>
        )}

        {/* Bottom CTA */}
        <BlurFade
          delay={BLUR_FADE_DELAY * (13 + (project.screenshots?.length || 0))}
        >
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t">
              {(project.demoUrl || project.githubUrl) && (
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              )}

              <a
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects →
              </a>
            </div>
          </section>
        </BlurFade>
      </div>
    </main>
  );
}
