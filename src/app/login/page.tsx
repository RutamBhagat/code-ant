"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError("Invalid email or password")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col justify-between w-full lg:w-1/2 p-8 lg:p-16">
        <div className="space-y-6">
          <Image
            src="/logo.svg"
            alt="CodeAnt AI Logo"
            width={150}
            height={40}
            className="mb-8"
          />
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember for 30 days
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm font-medium text-primary">
              Forgot password
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-primary">
            Sign up
          </Link>
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-[url('/login-background.jpg')] bg-cover bg-center" />
    </div>
  )
}
