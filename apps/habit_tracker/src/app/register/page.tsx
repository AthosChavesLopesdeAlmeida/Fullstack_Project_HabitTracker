'use client'
import { api } from "@/lib/api"
import { ApiError } from "@/lib/api"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type AuthResponse = {
  user: { id: string; email: string; name: string };
  token: string;
};

const Page = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const submitForm = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
        const { data } = await api<AuthResponse>('/auth/register', {
        method: 'POST',
        body: { name, email, password },
        });

        localStorage.setItem('token', data.token);
        router.push('/');
    } catch (err) {
        if (err instanceof ApiError) {
        setError(err.message);
        } else {
        setError('Connection was not possible');
        }
    } finally {
        setIsLoading(false);
    }
    };

  return (
    <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md dark">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Enter your data bellow to create an account</CardDescription>
            </CardHeader>

            <form onSubmit={(e) => submitForm(e)}>
                <CardContent>
                    <div className="flex flex-col gap-8">

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" required id="email" onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com"></Input>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" required id="password" onChange={(e) => setPassword(e.target.value)}></Input>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" required id="name" onChange={(e) => setName(e.target.value)} placeholder="Create a username"></Input>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </CardContent>

                <CardFooter className="flex-col gap-2 mt-4">
                    <Button type="submit" disabled={isLoading ? true : false} className={`${isLoading && 'opacity-80'}`}>
                        {isLoading ? 'Loading...' : 'Register'}
                    </Button>
                    <p onClick={() => router.push('/login')}>Already have an account? Log in</p>
                </CardFooter>
            </form>
        </Card>
    </div>
  )
}

export default Page