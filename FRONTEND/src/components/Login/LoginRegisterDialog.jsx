"use client"

import { useState } from "react"
import { User, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginRegisterDialog() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 8
  }

  const handleSubmit = (action) => {
    const { email, password, name } = formData

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.")
      return
    }
    if (action === "Sign Up" && !name) {
      setError("Please enter your name.")
      return
    }

    setError("")
    setSuccessMessage(`${action} successful!`)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login / Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <DialogHeader>
              <DialogTitle>Create an account</DialogTitle>
              <DialogDescription>Enter your details to create a new account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <div className="col-span-3 flex items-center">
                  <User className="mr-2 h-4 w-4 opacity-50" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <div className="col-span-3 flex items-center">
                  <Mail className="mr-2 h-4 w-4 opacity-50" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <div className="col-span-3 flex items-center">
                  <Lock className="mr-2 h-4 w-4 opacity-50" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => handleSubmit("Sign Up")}>
                Sign Up
              </Button>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="login">
            <DialogHeader>
              <DialogTitle>Login to your account</DialogTitle>
              <DialogDescription>Enter your credentials to access your account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="login-email" className="text-right">
                  Email
                </Label>
                <div className="col-span-3 flex items-center">
                  <Mail className="mr-2 h-4 w-4 opacity-50" />
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="login-password" className="text-right">
                  Password
                </Label>
                <div className="col-span-3 flex items-center">
                  <Lock className="mr-2 h-4 w-4 opacity-50" />
                  <Input
                    id="login-password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="flex flex-col items-center sm:flex-row sm:justify-between">
              <Button variant="link" className="mb-2 sm:mb-0">
                Forgot Password?
              </Button>
              <Button type="submit" onClick={() => handleSubmit("Login")}>
                Login
              </Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
        {error && <div className="text-red-500 text-sm mt-4 text-center">{error}</div>}
        {successMessage && <div className="text-green-500 text-sm mt-4 text-center">{successMessage}</div>}
      </DialogContent>
    </Dialog>
  )
}
