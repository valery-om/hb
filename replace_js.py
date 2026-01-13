
import os

script_path = '/Users/valeria/.gemini/antigravity/scratch/lev-birthday-site/script.js'
oracle_logic_path = '/Users/valeria/.gemini/antigravity/scratch/lev-birthday-site/oracle_logic.js'

with open(script_path, 'r') as f:
    script_content = f.read()

with open(oracle_logic_path, 'r') as f:
    oracle_logic = f.read()

# Define markers to locate initCalendar function
start_marker = '// Interactive Calendar 2026'
# Locating the end is trickier, let's look for known next function or end of file
# The initCalendar function seems to be the last major function before the end of the file or before helpers?
# Looking at previous view_file, it ends around line 685, and there might be more after.
# A safe replacement would be to find the start and then match the closing brace, but simpler string replacement might work if we have a good end marker.
# Let's search for "function initCalendar() {" and determine the block.
# Actually, the file view showed it continues until "generateCalendar();" and closing braces.
# Let's assume there is a specific calling line in init function too.

# Better approach: Replace the whole block if we can find unique valid start/end.
# Start: // Interactive Calendar 2026
# End: // Generate calendar (which is inside) -> wait, we need to remove the whole function definition.
# Let's look at where initCalendar calls were added.
# In DOMContentLoaded: "initCalendar();" needs to become "initOracle();"

# Step 1: Replace the function definition
# We'll use a simplified find based on previous file view.
# Start index
start_idx = script_content.find('// Interactive Calendar 2026')
if start_idx == -1:
    print("Could not find initCalendar start")
    exit(1)

# Find the end of the initCalendar function. 
# It ends with specific closing braces. 
# Based on the view:
# 684:     // Generate calendar
# 685:     generateCalendar();
# ... closing braces ...
# 686: }
# (approximate)

# Let's verify by counting braces or finding the start of the next section?
# The next section seems to be "monthlyWishes" array (line 696 in previous reads).
next_section_marker = 'const monthlyWishes ='

end_idx = script_content.find(next_section_marker)
if end_idx == -1:
    # Maybe it's at the end?
    # Let's search for the last closing brace before monthlyWishes
    print("Could not find monthlyWishes marker")
    # Let's try to assume it handles lines 469 to ~690
    # Let's look for the text immediately preceding "const monthlyWishes"
    pass

# Alternative: Replace via string slice if we can identify the exact segment.
# We know lines 470-686 contain the logic.
# Let's regex or smart find.

# Let's iterate lines.
lines = script_content.splitlines()
start_line = -1
end_line = -1

for i, line in enumerate(lines):
    if '// Interactive Calendar 2026' in line:
        start_line = i
    if 'const monthlyWishes =' in line:
        end_line = i - 1 # The line before monthlyWishes is likely empty or closing brace
        break

if start_line != -1 and end_line != -1:
    # Refine end_line to be the closing brace of initCalendar
    # Scan backwards from end_line
    while end_line > start_line:
        if lines[end_line].strip() == '}':
            break
        end_line -= 1
    
    # Now replace lines
    print(f"Replacing lines {start_line} to {end_line}")
    new_script_lines = lines[:start_line] + [oracle_logic] + lines[end_line+1:]
    
    # Also need to replace the call in DOMContentLoaded
    # initCalendar(); -> initOracle();
    final_content = '\n'.join(new_script_lines)
    final_content = final_content.replace('initCalendar();', 'initOracle();')
    
    with open(script_path, 'w') as f:
        f.write(final_content)
    print("Successfully replaced initCalendar with initOracle")

else:
    print(f"Could not find boundaries. Start: {start_line}, End: {end_line}")

