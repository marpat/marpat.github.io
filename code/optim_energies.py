#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      Rubidium
#
# Created:     05/08/2013
# Copyright:   (c) Rubidium 2013
# Licence:     <your licence>
#-------------------------------------------------------------------------------
#!/usr/bin/env python

def main():
    pass

if __name__ == '__main__':
    main()
import string,sys,os

##atoms = eval(sys.argv[1]) # convert x to number
##
##filename = sys.argv[2]

atoms = 7
filename = "Methylamine_new.out"
file = open(filename,'r')

#parse filename and path
basename, extension = os.path.splitext(filename)

optim = []

while True:
    line = file.readline() # read a line from the file
    if not line: break # if end-of-file: quit
    words = string.split(line) # split the line into words
  ##  print words
# equilibrium coordinates are printed out a second time ?
# and should not be read
##    if len(words) > 1 and words[1] == 'COORDINATES': break

# find and read coordinates
# find line with COORDINATES as the 1st word
    if len(words) > 3 and words[2] == 'ENERGY=':
        words = string.split(line)
        optim.append((words[1],words[3]))
##        print 'Step ' + words[1] + ' Energy ' + words[3]

# print and write file in .xyz format
##proc_file = basename + "_jmol.out"
##write_output = open(proc_file, 'w')
print '%s' % 'Step  '  '  Energy'
for i in range( 19 ):
    ##if i%atoms == 0: print atoms # modulus operator for remainder check
    ##if i%atoms == 0: print basename
##    if i%atoms == 0: write_output.write(str(atoms)+'\n')
##    if i%atoms == 0: write_output.write('title\n')
   tog = (optim[i][0],optim[i][1],)
   print '%s\t%s' % tog # formats tog
 ##   write_output.write('%s %s %s %s\n' % tog)
##write_output.close()