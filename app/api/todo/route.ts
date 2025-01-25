import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from "next/server";
// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function POST(req: NextRequest) {
  const { todo } = await req.json();

  // Insert the todo into the todos table
  const { data, error } = await supabase
    .from('todos')
    .insert([{ todo }]);
  console.log(data, error);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest) {
  const { todo } = await req.json();

  // Delete the todo from the todos table
  const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('todo', todo);
  console.log(data, error);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}


