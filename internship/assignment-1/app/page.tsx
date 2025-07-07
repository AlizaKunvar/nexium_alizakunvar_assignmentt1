'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { quotes } from '../quotes'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [filtered, setFiltered] = useState<typeof quotes>([])

  const handleSearch = () => {
    const match = quotes.filter(q =>
      q.topic.toLowerCase().includes(topic.trim().toLowerCase())
    ).slice(0, 3)
    setFiltered(match)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Quote Finder</h1>

      {/* Input + Button Row */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 w-full max-w-xl">
        <Input
          className="flex-1"
          placeholder="Enter a topic (love, success, self)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Results */}
      <div className="grid gap-4 max-w-xl w-full">
        {filtered.map((quote, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-lg font-medium text-black">"{quote.text}"</p>
              <p className="text-right text-sm text-gray-600">— {quote.author}</p>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && <p className="text-gray-500">No quotes found.</p>}
      </div>
    </main>
  )
}
