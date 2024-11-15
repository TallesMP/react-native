import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qpxgbjosdiyjbmjoqzbr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFweGdiam9zZGl5amJtam9xemJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMzExODUsImV4cCI6MjA0NjkwNzE4NX0.kUnUHZHAuZvjA63IHmC8K2yMuvqRHABTFRq6Jr1sl6Q'
// sim eu sei que da pra usar variavel de mabiente, mas achei desnecessario nesse projeto
export const supabase = createClient(supabaseUrl, supabaseKey)


