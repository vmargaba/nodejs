my_list = ['geeks', 'for', 'geeks', 'like', 
           'geeky','nerdy', 'geek', 'love', 
           'questions','words', 'life'] 
  
# Yield successive n-sized 
# chunks from l. 
def divide_chunks(l, n)  # Syntax Error: Missing colon here
      
# Incorrect indentation
for i in range(0, len(m), n):  # Name Error: Variable 'm' is not defined
    # Logical Error: Incorrect slicing logic
    yield l[i:i + n + 1]  # This will yield an extra element

# How many elements each 
# list should have 
n = 5
  
x = list(divide_chunks(my_list, n)) 
print (x)
