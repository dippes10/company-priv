import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { routes } from "./config/routes"

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <Link
        className="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium"
        href={routes.HOME}
      >
        🎉{" "}
        <div
          data-orientation="vertical"
          role="none"
          className="bg-border mx-2 h-4 w-px shrink-0"
        ></div>{" "}
        <span className="sm:hidden">Coming Soon</span>
        <span className="hidden sm:inline">Coming Soon</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 size-4"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
      <h1 className="from-primary text-balance bg-gradient-to-r to-slate-500 bg-clip-text text-center text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-6xl lg:leading-[1.1] dark:to-zinc-700">
        Send Message, Anywhere
      </h1>
      <span
        className="text-muted-foreground max-w-[750px] text-center text-lg sm:text-xl"
        data-br=":Rrfau6la:"
        data-brr="1"
        style={{
          display: "inline-block",
          verticalAlign: "top",
          textDecoration: "inherit",
          maxWidth: "614px",
        }}
      >
        Don&apos;t get limited by the platform you use. Send messages to anyone,
        anywhere
      </span>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Link
          className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          href={routes.LOGIN}
        >
          Early Access
        </Link>

        <Link
          target="_blank"
          href={routes.TERMS}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors  disabled:pointer-events-none disabled:opacity-50"
        >
          Contact Us
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-sm flex-col items-center space-y-2">
        <form className="flex items-center justify-center space-x-2">
          <Input
            className="max-w-lg flex-1 "
            placeholder="Enter your email"
            type="email"
          />
          <Button
            className="bg-cyan-500 text-zinc-50"
            variant="secondary"
            type="submit"
          >
            Notify me
          </Button>
        </form>
        <p className="text-xs ">
          By clicking Notify me, you agree to our{" "}
          <Link className="underline underline-offset-2" href="#">
            Terms & Conditions
          </Link>
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-6">
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex flex-row items-center space-x-1">
            <p className="text-muted-foreground text-center text-xs ">
              A project by{" "}
              <Link href="https://peakvoyage.com" className="underline">
                Peak Voyage
              </Link>
            </p>
            <span className="text-muted-foreground text-center text-xs ">
              •
            </span>
            <p className="text-muted-foreground text-center text-xs ">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
