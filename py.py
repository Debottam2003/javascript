import time

# Start the timer
start_time = time.perf_counter()

# Task: Calculate the sum of squares for a large range
sum = 0
limit = 10**8  # 10 million iterations
for i in range(limit):
    sum += i * i

# End the timer
end_time = time.perf_counter()
time_taken = end_time - start_time

print(f"Python completed the task in {time_taken:.3f} seconds.")
