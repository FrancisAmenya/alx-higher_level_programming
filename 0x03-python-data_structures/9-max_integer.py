#!/usr/bin/python3
def max_integer(my_list=[]):
    # Check if the list is empty
    if len(my_list) == 0:
        return None

    # Initialize the maximum value with the first element
    max_value = my_list[0]

    # Iterate through the list starting from the second element
    for num in my_list[1:]:
        # If current number is greater than max_value, update max_value
        if num > max_value:
            max_value = num

    return max_value
