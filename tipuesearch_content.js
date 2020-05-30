var tipuesearch = {"pages":[{"title":"About","text":"I am a chemist by training with a passion for organic chemistry, the discovery of new medicines, and computer technologies. Throughout my career, it was the scientific curiosity that led me into scientific disciplines of organic chemistry , combinatorial chemistry , medicinal chemistry , peptide synthesis , drug design , cheminformatics , computational chemistry , and the necessary programming/scripting . The arsenal of my scripting and programming tools includes HTML, CSS, jQuery, PHP, Java, and Python. As for my hobbies, I enjoy digital photography , color science, and web design. On the business side, I enjoy my engagement in the consulting work at Bright Rock Path , LLC . My projects utilize the above disciplines and cover various aspects of early-stage drug discovery from hit identification to lead optimization to clinical candidates.","tags":"misc","url":"https://marpat.github.io/pages/about.html","loc":"https://marpat.github.io/pages/about.html"},{"title":"Contacts","text":"The best way to contact me is by e-mail. # My contact e-mail is: email = ( \"chem g plus a t g ma il dot com\" ) . replace ( \" \" , \"\" ) Just kidding, click the button below. I'm on LinkedIn and you can also find me on Twitter @mpatek_ . Show/Hide email","tags":"misc","url":"https://marpat.github.io/pages/contact.html","loc":"https://marpat.github.io/pages/contact.html"},{"title":"Introduction to UCSF Chimera","text":"Molecular visualization Molecular visualization and analysis of structural features are indispensable elements in the understanding 3D structure of proteins, peptides, and nucleotides. With proper and effective tools, the design of molecular complexes of the above biopolymers and small molecules or peptides (e.g., inhibitors) becomes significantly enabled. Such tools and methods thus form an essential part of structure-based drug design. While there are several excellent molecular visualization packages, this blog will focus on one such package called UCSF Chimera ( Pettersen et al. (2004) ; Goddard and Ferrin (2007) ). However, in the interest of fairness, let's briefly mention other packages: PyMOL 1 and its maintained open-source version 2 (*) VMD 3 Biovia Discovery Studio 4 Jmol 5 (*) PyMOL is an open-source molecular visualization system built on an open-source foundation, which means that you get free access to the source code. However, since the PyMOL 2.x, there is no binary installer available for Windows. Schrödinger compiles and sells ready-to-run binaries for all major computer platforms (Windows, Linux, Mac). Still, you can download (and compile) the open-source code from GitHub. To support the PyMOL community, Schrodinger provides access to some PyMOL legacy builds at no-cost. Since the PyMOL is one of the top molecular visualization tools used in drug discovery, here are several links to resources that describe (more complex) installation of the latest open-source PyMOL on Windows: Legacy source and binaries Unofficial Windows binaries and how to install them a) and b) Install Pymol v2+ under Python Conda environment Chimera Now, back to the heart of the topic, the UCSF Chimera - a feature-rich desktop application for interactive visual analysis. Since a picture is worth a thousand words, I included several screenshots taken from Chimera's main graphical user interface (GUI). All visualizations were generated on Windows 10. Let's start with a little more advanced representation of contact surfaces between two proteins, in this case, the SARS-CoV2 and ACE2 ( Fig. 1 ). Image details like labels, colors, and rendering are fully customizable through scripts. Fig. 1. An example of Chimera user interface. The image details the contact surface for an interaction between RBD of SARS-CoV2 and ACE2 (ribbon helices \\(\\alpha\\) 1 and \\(\\alpha\\) 2 in gold and blue, respectively. Features Many features of the Chimera, such as direct access to PDB , EMDB , NBD , PubChem3D , and UniProt , are enabled by internet-based services. Examples of analytical services include BLAST Protein , Clustal Omega , MUSCLE , SMILES Translator , or smi23d. The full list of web services utilized by Chimera is maintained at this link . Interfaces to multiple sequence alignment (MSA) using Clustal omega or MUSCLE are now part of the Chimera package ( Huang et al. (2014) ). Additional services include BLAST sequence searching ( Altschul et al. (1990) ), Modeller comparative modeling ( Webb and Sali (2016) , Yang et al. (2012) ), calculation of small-angle X-ray scattering profiles ( SchneidmanDuhovny et al. (2010) ), APBS electrostatic calculations ( Unni et al. (2011) ), PDB2PQR preparation of structures for calculations involving electrostatics ( Unni et al. (2011) , Dolinsky et al. (2007) ), and AutoDock Vina molecular docking ( Trott and Olson (2010) ). Figure 2 illustrates many feature-rich menu items accessible from the top section of the Chimera's GUI. On the Volume menu, the frequently used modules include Volume Viewer , Surface Color , and Measure Volume and Area . The Tools menu offers a rich and expandable selection of multiple modules and panels. General Controls menu offers several frequently used items, such as: Command Line (at the bottom in Fig. 1 allowing to instruct Chimera by commands) Model Panel (an integrated view on opened models with shortcuts to model-modifying commands) Keyboard Shortcuts (enabling to modify rendering properties quickly. Activate in Command Line as Command: ac) Depiction menu features items, such as: Color Secondary Structure (with customizable colors for helices and turns) PipesAndPlanks (an alternative to ribbons view) 2D labels (useful for annotation) Surface Capping Per-Model Clipping (see Fig. 4 ) The Surface/Binding Analysis sub-menu has several groups of modules used in structural analysis and molecular docking ( Fig. 2 ). The latter group features modules that allow the preparation of proteins and ligands for docking with AutoDock Vina (an open-source program that must be installed separately). Results can then be viewed and analyzed in the ViewDock module. Fig. 2. An example of feature-rich options and modules accessible from the main menu of the UCSF Chimera. With extensive support for rendering molecular surfaces and volumes, bonds and atoms, structure minimization, analysis of molecular dynamics trajectories, and scripting capabilities, the Chimera is a tool of choice for structure-based protein and drug design. How does it compare with PyMOL Viewer? There certainly is a steep learning curve when mastering Chimera. But in the end, Chimera has a broader scope, has more built-in modules, and due to the GUI menus, feels more comprehensive. I also use PyMOL in my work and think that protein rendering might be slightly better in some cases. For obvious reasons, it is visually closer to rendering in the Schrödinger suite, particularly the Maestro module. Chimera's primary programming language is Python, namely Python 2. By software architecture, Chimera is divided into core and extensions. The core provides basic services and visualization capabilities. All higher-level functionality is provided through extensions ( plugins ). In another example, the binding pocket of HEME ligand is shown interacting with a bound molecule of oxygen in complex with oxymyoglobin. Fig. 3. Details of ligand (HEME) binding surface in the hydrophobic pocket of oxymyoglobin (PDB code 1MBO). Licensing The UCSF Chimera is available from http://www.cgl.ucsf.edu/chimera/ , and it can be downloaded free of charge for academic, government, non­profit, and personal use. It can be licensed by commercial institutions for a fee. Extensions to Chimera developed by outside researchers can be redistributed freely. If publishing results obtained with Chimera, include an appropriate citation as described at: http://www.cgl.ucsf.edu/chimera/docs/credits.html . Installation Since my main systems include Windows 10 and Linux Mint, I'll detail the installation on those systems. For installation instructions on Mac OS X 10.8 or later, follow this link . Windows 10 : Download Chimera distribution file from here to a place like the Downloads folder, in this example, file chimera-1.14-win64.exe . In the Downloads folder, double-click the downloaded binary and follow installation instructions. Keep or change the drive (\"C:\", \"D:\", \"E:\", ...). Chimera should then be installed in drive:\\Program Files\\Chimera 1.14 Linux : Download Chimera distribution file from here to a place like ~/Downloads folder, in this example, file chimera-1.14-linux_x86_64.bin . $ cd ~/Downloads $ chmod +x chimera-1.14-linux_x86_64.bin $ sudo ./chimera-1.14-linux_x86_64.bin Follow the interactive install instructions: Enter install location: /opt/UCSF/Chimera64-1.14 'enter' Install desktop menu ( icon has to be done by user ) ? 'yes' Install symbolic link to chimera executable for command line use in which directory? 0 -- no link 1 -- /usr/local/sbin 2 -- /usr/local/bin 3 -- /usr/sbin 4 -- /usr/bin 5 -- /sbin 6 -- /bin 7 -- /snap/bin [ hit Enter for default ( 0 )] : '2' Create unversioned link to chimera executable in same directory? 'yes' ( now installing ) To place Chimera icon on the user desktop, run the command below: To ( re ) install desktop menu and icon later, run: '/opt/UCSF/Chimera64-1.14/bin/xdg-setup install' On my Linux Mint 19.1 Tessa (ed. MATE), the app was placed into Menu->Graphics From the terminal, check that Chimera was correctly installed by: $ chimera --version 'chimera production version 1.14 (build 42094) 2019-11-13 06:05:13 UTC' $ which chimera '/usr/local/bin/chimera' To make sure that Chimera can be called from anywhere on your system, add the following two lines to your .bashrc file: # CHIMERA export PATH = $PATH : $HOME /usr/local/bin/chimera Now, there should be the Chimera icon on your system desktop. Double-click it to start the application. Alternatively, in your terminal, type: $ chimera See the more detailed description of the Linux installation. More examples of surfaces Besides the extensive rendering capability of proteins and DNA chains, options in the Volume menu allow for the generation of molecular surfaces, such as calculated electron density, mapping of electrostatic potential onto the electron density ( Fig. 4 ), display of molecular orbitals or electron localization function ( Fig. 5 ). The basis for such surface display is cube files generated by many quantum mechanics packages (in this case by the open-source package PSI4 and Dgrid ). Fig. 4. Molecule of chlorobenzene with a slice through the surface generated by mapping electrostatic potential onto electron density at 0.01 a.u. Fig. 5. Electron localization surface (ELF) at η = 0.836 indicating the presence of \\(\\sigma\\) -hole at the chlorine atom in chlorobenzene. The surface images were generated by the UCSF Chimera package and could be further rendered or improved by the POV-Ray or MeshLab programs. Next After the general overview, feature highlights, and several visual examples, the next blog article will focus on practical examples of using Menu options and commands. Notes DeLano, W. L. (2002) The PyMOL Molecular Graphics System, DeLano Scientific LLC, San Carlos, CA ↩ The PyMOL Molecular Graphics System, Schrödinger, LLC. ↩ Humphrey, W., Dalke, A., and Schulten, K. (1996) VMD: visual molecular dynamics. J. Mol. Graph. 14, 33–38, 27–28) ↩ Dassault Systèmes BIOVIA, ver. e.g. 2020, San Diego: Dassault Systèmes. ↩ Jmol: an open-source Java viewer for chemical structures in 3D. http://www.jmol.org/ ↩ Bibliography S. F. Altschul, W. Gish, W. Miller, E. W. Myers, and D. J. Lipman. Basic local alignment search tool. J. Mol. Biol. , 215(3):403–410, October 1990. doi:10.1016/S0022-2836(05)80360-2 . ↩ Todd J. Dolinsky, Paul Czodrowski, Hui Li, Jens E. Nielsen, Jan H. Jensen, Gerhard Klebe, and Nathan A. Baker. PDB2PQR : expanding and upgrading automated preparation of biomolecular structures for molecular simulations. Nucleic Acids Res. , 35(Web Server issue):W522–525, July 2007. doi:10.1093/nar/gkm276 . ↩ Thomas D Goddard and Thomas E Ferrin. Visualization Software for Molecular Assemblies . Curr Opin Struct Biol , 17(5):587–595, October 2007. doi:10.1016/j.sbi.2007.06.008 . ↩ Conrad C. Huang, Elaine C. Meng, John H. Morris, Eric F. Pettersen, and Thomas E. Ferrin. Enhancing UCSF Chimera through web services. Nucleic Acids Res , 42(W1):W478–W484, July 2014. doi:10.1093/nar/gku377 . ↩ Eric F. Pettersen, Thomas D. Goddard, Conrad C. Huang, Gregory S. Couch, Daniel M. Greenblatt, Elaine C. Meng, and Thomas E. Ferrin. UCSF Chimera –a visualization system for exploratory research and analysis. J Comput Chem , 25(13):1605–1612, October 2004. doi:10.1002/jcc.20084 . ↩ Oleg Trott and Arthur J. Olson. AutoDock Vina : improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading. J Comput Chem , 31(2):455–461, January 2010. doi:10.1002/jcc.21334 . ↩ Samir Unni, Yong Huang, Robert M. Hanson, Malcolm Tobias, Sriram Krishnan, Wilfred W. Li, Jens E. Nielsen, and Nathan A. Baker. Web servers and services for electrostatics calculations with APBS and PDB2PQR . J Comput Chem , 32(7):1488–1491, May 2011. doi:10.1002/jcc.21720 . ↩ 1 2 Benjamin Webb and Andrej Sali. Comparative Protein Structure Modeling Using MODELLER . Curr Protoc Bioinformatics , 54:5.6.1–5.6.37, June 2016. doi:10.1002/cpbi.3 . ↩ Zheng Yang, Keren Lasker, Dina Schneidman-Duhovny , Ben Webb, Conrad C. Huang, Eric F. Pettersen, Thomas D. Goddard, Elaine C. Meng, Andrej Sali, and Thomas E. Ferrin. UCSF Chimera , MODELLER , and IMP : An integrated modeling system. Journal of Structural Biology , 179(3):269–278, September 2012. doi:10.1016/j.jsb.2011.09.006 . ↩ Dina Schneidman-Duhovny , Michal Hammel, and Andrej Sali. FoXS : a web server for rapid computation and fitting of SAXS profiles. Nucleic Acids Res. , 38(Web Server issue):W540–544, July 2010. doi:10.1093/nar/gkq461 . ↩","tags":"Structure visualization","url":"https://marpat.github.io/chimera-intro.html","loc":"https://marpat.github.io/chimera-intro.html"},{"title":"Blogging with Python, Miniconda, and Pelican on Windows","text":"Introduction With so many blogs and descriptive how-to's out there 1 , 2 , 3 , 4 , 5 , 6 , 7 , one may be wondering why another post on Pelican static site generator. The purpose of this blog is to provide an entry level document for building a static web site in Windows environment with Miniconda Python distribution. This tutorial assumes very little, so we will cover each step in a little more details. Chances are that you have already heard about the the Python-powered micro web frameworks, static page generators, and even about Pelican , Nikola , or Flask . If not, this blog 8 has a nice introduction. Pelican is a static web page generator that delivers web pages to the user exactly as they are stored on the server. There is no user-interaction possible once the pages are rendered. In contrast, dynamic web pages are generated and updated by a web application. Pelican is written in Python (2 or 3) and it is platform independent. Requirements Before we get started, we'll need a base installation of Python , and of course, the Pelican . The following are the minimum requirements: Python 3.5 or higher (aka Python 3), but Python 2.7 (aka Python 2) works also Pelican package (v4 +) Text editor (e.g., Notepad++ , Markdown Pad2 , Sublime Text , or Typora ) Web server for the web hosting Python First, we need a Python installation. I recommend Anaconda or Miniconda , both being a distribution of Python from the company Anaconda . Anaconda and Miniconda are free and the former comes with many pre-installed Python packages and libraries such as Pandas, NumPy, matplotlib, and others. The latter, is a minimal installer for conda. It is a small, bootstrap version of Anaconda that includes only conda, Python, the packages they depend on, and a small number of other useful packages, including pip, zlib and a few others. However, neither installation includes Pelican site generator. If you already have Python installed, skip to the section Virtual Environment . To get Anaconda/Miniconda installed under the Windows, download the latest binary package [ Anaconda | Miniconda ] and install the executable. This tutorial is using Miniconda although steps with Anaconda are the same. The typical (and default) path to install Miniconda on Windows is: C:\\Miniconda3 . When installation completes, append the following string into your system PATH or make sure that it is written there by the installer: C:\\Miniconda3;C:\\Miniconda3\\Lib;C:\\Miniconda3\\DLLs;C:\\Miniconda3\\Lib\\lib-tk;C:\\Miniconda3\\Scripts; To access the PATH variable, right-click on Computer ⇒ Advanced system settings ⇒ Advance tab ⇒ Environment Variables ⇒ System variables ⇒ Path. Note that the latest Anaconda/Miniconda installation binaries set the correct path if checked during the install. To check that Miniconda has installed successfully, launch the Windows command shell (cmd.exe) and execute the command: conda info -- all A typical (shortened) output follows: Current miniconda install: platform : win-64 python version : 3.6.7.final.0 user config file : $HOME.condarc Set up a virtual environment To avoid potential Python library/package dependency conflicts, it is a good practice to install new projects into their own development environment. Such environment includes a fresh copy of the Python binary together with a copy of the entire Python standard library. Most importantly, if any file gets corrupted, one can simple remove and re-install the environment. Let's create a virtual environment called pelican1 . conda create - n pelican1 python = 3.6 The expected response is shown in Figure 1 and Figure 2 . Fig. 1. Creating virtual environment pelican1 . Fig. 2. Packages installed in the virt env pelican1 . Anywhere on your computer, make a new folder for your blog items (e.g., blog) and activate the new environment as: > cd path\\to\\blog > conda activate pelican1 if everything went as expected, you should see the following text at the command prompt: (pelican1) drive:\\\\path\\to\\blog Pelican Finally, we proceed with the installation of the Pelican package. In your terminal, execute: (pelican1) drive:\\\\path\\to\\blog >conda install pelican The progress will look similar to the following output. Downloading pelican - 3.6 . 2 - py2 . py3 - none - any . whl ( 129 kB ) Downloading Pygments - 2.0 . 2 - py2 - none - any . whl ( 672 kB ) Downloading feedgenerator - 1.7 . tar . gz Downloading Unidecode - 0.04 . 18. tar . gz ( 206 kB ) Downloading pytz - 2015.4 - py2 . py3 - none - any . whl ( 475 kB ) Downloading python_dateutil - 2.4 . 2 - py2 . py3 - none - any . whl ( 188 kB ) Downloading six - 1.9 . 0 - py2 . py3 - none - any . whl Downloading Jinja2 - 2.8 - py2 . py3 - none - any . whl ( 263 kB ) Downloading docutils - 0.12 . tar . gz ( 1.6 MB ) Downloading blinker - 1.4 . tar . gz ( 111 kB ) Downloading MarkupSafe - 0.23 . tar . gz Installing collected packages : pygments , pytz , six , feedgenerator , unidecode , py thon - dateutil , markupsafe , jinja2 , docutils , blinker , pelican Other Python package Following are packages that I found useful when developing and publishing Pelican blog site using Jupyter notebooks. To make their installation easier, we will use the packages.yml file. Open a text editor and type (copy/paste) the following content. name: pelican1 channels: - conda-forge - defaults dependencies: - bs4 - html5lib - Markdown - fabric3 - typogrify - invoke - MarkupSafe - livereload - pybtex - jupyter prefix: C:\\Miniconda3\\envs\\pelican1 Save the file as packages.yml into the folder C:\\Miniconda3\\envs . Next, from the shell, issue the following command: (pelican1) c:\\Miniconda3\\envs > conda env update --file packages.yml In case that you plan on using Disqus platform for comments and discussion on your articles, install the following package directly from the GitHub: pip install git + https : // github . com / disqus / disqus - python . git and add \"disqus_static\" entry into the PLUGINS list in pelicanconf.py. To build, publish, and maintain the site, I use the Fabric Python library. At this point, the size of pelican1 environment is about 100Mb. Pelican blog So far, all packages were installed in the C:\\Miniconda3\\env\\pelican1\\ folder. The actual blog files require different drive/folder location from which the site is managed. Let's create such directory, for example, F:\\Blog\\pelican . Now, while still in the pelican1 virtual environment, cd into this directory: (pelican1) c:\\Miniconda3\\envs\\pelican1 >cd F:\\Blog\\pelican To initiate this new blog/web site, run the quickstart script and answer the setup questions. Note that I have chosen not to use GitHub Pages and secure SSH protocol for upload. The latter will be addressed below. (pelican1) F:\\Blog\\pelican> pelican-quickstart > Where do you want to create your new web site? [.] (just press enter; it will be in the /pelicalblog directory; in this case F:\\Blog\\pelican) > What will be the title of this web site? Blogging with Pelican > Who will be the author of this web site? your name > What will be the default language of this web site? [en] > Do you want to specify a URL prefix? e.g., http://example.com (Y/n) y > What is your URL prefix? (see above example; no trailing slash) http://www.yourdomain.com/blog > Do you want to enable article pagination? (Y/n) y > How many articles per page do you want? [10] 8 > What is your time zone? [Europe/Paris] America/Phoenix > Do you want to generate a Fabfile/Makefile to automate generation and publishing? (Y/n) y (create fabfile.py) > Do you want an auto-reload & simpleHTTP script to assist with theme and site development? (Y/n) y > Do you want to upload your website using FTP? (y/N) y > What is the hostname of your FTP server? [localhost] ftp.yourdomain.com > What is your username on that server? [anonymous] username > Where do you want to put your web site on that server? [/] /blog > Do you want to upload your website using SSH? (y/N) n > Do you want to upload your website using Dropbox? (y/N) n > Do you want to upload your website using S3? (y/N) n > Do you want to upload your website using Rackspace Cloud Files? (y/N) n > Do you want to upload your website using GitHub Pages? (y/N) n A little more explanation on the \"URL prefix\" question. Answer yes and enter URL in the next step only if you have external web hosting site. Let's take a look at the just created folder structure within the F:\\Blog\\pelican directory. Now if you type the tree command within your blog's main directory, you should see a directory tree similar to this one: pelican/ ├── content │ └── firstblog.md ├── output │ ├── author/ │ ├── category/ │ ├── tag/ │ ├── theme/ │ ├── archives.html │ ├── authors.html │ ├── Blogging with Pelican.html │ ├── categories.html │ ├── index.html │ └── tags.html ├── fabfile.py ├── pelicanconf.py └── publishconf.py Breaking down each of these files: content/firstblog.md : A content file in Markdown syntax. This is where you start writing your blog. output/ : Content of this folder is automatically generated and later uploaded to a server. fabfile.py : Is a configuration file for Fabric , which allows you to generate your site using the fab command . pelicanconf.py : Is a Pelican configuration file containing the site settings . publishconf.py : Similar to pelicanconfig.py file, but is not intended to be used for local development. Building the site Now let's build the default look of the blog. In your terminal, type the fab command after the > character: (pelican1) F:\\Blog\\pelican>fab build Then (pelican1) F:\\Blog\\pelican>fab serve We've just launched a local webserver on the port 8000. Open your browser and navigate to http://localhost:8000 the default skeleton and template should display in your browser. Fig. 3. Final view of the site. To avoid repetitive typing in the terminal, set up a batch file, which will get you directly to the (pelican1) F:\\Blog\\pelican environment and directory. Save the following script as pelican.bat and place the file into C:\\Windows\\System32 directory. @echo off REM add this batch file into C:/windows/system32 REM run upon opening cmd as >pelican.bat REM 'path\\to\\blog' example F:\\Blog\\pelican set SERVE=path\\to\\blog cd /D %SERVE% conda activate pelican1 Next time, upon launching the command line terminal ( cmd.exe ), just type pelican.bat and the script will execute. To change or tweak the site settings, edit files pelicanconf.py and fabfile.py created in the main path\\to\\blog directory. # pelicanconf.py from __future__ import unicode_literals AUTHOR = u 'yourname' # Change it here SITENAME = u 'Blogging with Pelican' # Change it here SITEURL = '' PATH = 'output' # This is where you write blogs, keep images, css, .. TIMEZONE = 'America/Phoenix' # Change it here DEFAULT_LANG = u 'en' # other functions (default) # fabfile.py # default variables and functions follow # ... # Added site upload function to circumvent setup of rsync on Windows env . hosts = [ 'ftp.yourdomain.com' ] env . user = \"username\" env . password = \"serverpassword\" # or just entered it when connecting from fabric.context_managers import cd def sftp (): # run from the parent directory /pelicanblog/ with lcd ( 'output' ): # cd into output directory local ( \"dir\" ) # list files and directories to be uploaded put ( '*' , './public_html/yourblogdirectory/' ) # change here Note the sftp() function added at the end of the fabfile.py . The default publish() function is based on rsync utility that is not that easy to install on Windows. Instead, we can use the SSH File Transfer Protocol (sftp) protocol, which is also secure an simple to implement. In order to use sftp protocol to safely upload your site to a web-hosting server, you will need to enable SSH/Shell access on your hosted account. Major web-hosting sites support both ftp and sftp protocols. Now, let's move on and start working on the first blog. Markdown .md file To create the content of our new web site, we will use the Markdown syntax 9 , 10 . Let's create our first markdown file name it firstblog.md . Save it into the /pelican/content folder. Title: First Blog Post Date: 2020-4-5 13:10 Category: Blogging Tags: blogging, markup Slug: blogging-with-pelican Author: yourname Summary: Collection of notes related to programming and scripting. Latex: # Work in progress Following are examples of Pelican markup. This is a **first** attempt to create static page with the help of _Pelican_ . Rendering and uploading the site At this point, we will move back to the terminal and issue the following commands. (pelican1) F:\\Blog\\pelican>fab build (pelican1) F:\\Blog\\pelican>fab serve Now, in the browser type http://localhost:8000 and our modified (local) site should load. To upload it to a web-server, make sure that you create your blog directory at the remote site first. Note the path to it, e.g. /public_html/yourblogdirectory. Enter your host name (e.g., https://my.site.com) and user name into the fabfile.py file as shown above. In your terminal, enter: (pelican1) F:\\Blog\\pelican>fab sftp Upload process should start immediately with a list of files to be uploaded and a prompt for your password. After the upload is done, head to the site and check its accessibility (e.g., https://my.site.com/yourblogdirectory/index.html). What's been accomplished This concludes the process of setting up a simple Pelican site on Windows and Python miniconda environment. We have built the skeleton of Pelican static web-site in Python virtual environment, modified its configuration files, and uploaded the site to our hosting server. References: Setting up Pelican ↩ How I built this site ↩ Blog migrated to Pelican and GitHub pages ↩ Making a Static Blog with Pelican ↩ Using pelican to generate static sites on windows ↩ Creating your blog with Pelican ↩ How to Create Your First Static Site with Pelican and Jinja2 ↩ Creating a Blog on GitHub.io with Python ↩ Markdown Cheatsheet ↩ from Darin Fireball ↩","tags":"Blogging","url":"https://marpat.github.io/python-miniconda-and-pelican-on-windows.html","loc":"https://marpat.github.io/python-miniconda-and-pelican-on-windows.html"},{"title":"Create html Report from Jupyter Notebook on Windows","text":"Introduction While Jupyter notebook has a built-in facility for multiple output formats, its use depends on OS platform and requirements on the output file. Perhaps the most requested output is pdf format currently done in two-steps: html to latex to pdf. 1 Unfortunately for those working on Windows, Latex rendering requires installation of MiKTexT , Tex Live preferred by Jupyter and Latex editor, such as TeXstudio . The process of getting output similar to the original notebook is quite convoluted and impractical. An alternative solution is to print notebook directly to pdf format, assuming that one has installed the pdf writer (driver) on Windows. Print-to-pdf is the done by choosing the pdf from the list of available printers in the print dialog. There are two issues that one may face should the desired report preserve color and be within the code cells . Let's start with an illustration of sample Jupyter notebook as rendered by Jupyter. Fig. 1. Rendering of the original Jupyter notebook. Alternatively, the complete Jupyter notebook is at this link: Sample_ipynb.ipynb First, we export the notebook as html file: Fig. 2. Exporting notebook as .html file. Color rendering Printing the notebook directly (File -> Print Preview -> print (Ctrl+P)) to a printer device renders the notebook in black and white 2 . Fig. 3. B&W rendering of html file at the print. The culprit here is one line in the embedded style under the @media print section, specifically, color: #000 !important . This instruction overwrites default and custom colors, setting black-white as default print output. Fig. 4. css/style instructions to overwrite colors. This offending line is coming from the Bootstrap 3 .less template, which is part of the Jupyter notebook styling. There are three solutions: one is to edit out this line in the .less file and recompile the new default css file for notebooks. the second solution is to comment out the color: #000 !important line in the style.min.css file 3 , and the third approach is to remove the same line from the embedded style section in exported (rendered) html file. Last two approaches are demonstrated here. Editing Bootstrap style.min.css file: Locate the Jupyter default style sheet style.min.css in: minconda3\\Lib\\site-packages\\notebook\\static\\style\\style.min.css or minconda3\\envs\\[your_environment]\\Lib\\site-packages\\notebook\\static\\style\\style.min.css and search for the phrase #000 !im . Comment out the line shown below and save: @ media print { *, * : before , * : after { background : transparent !important ; /*color: #000 !important;*/ /*<---- comment out this line*/ box-shadow : none !important ; text-shadow : none !important ; } Editing the rendered .html file file After creating html file in Jupyter notebook like so: File -> Download as -> HTML (html) comment out the same line as above and save. Code Cells Since notebooks are often used for education and collaborative projects, output of the code cells has been often a desired feature. On the other hand, should the ultimate result be a report for the customer, code cells could be quite distracting. Fig. 5. Report with visible code cell. One way to suppress visibility of code cell is to use JQuery (javascript) in the separate Jupyter cell as per 4 , 5 : # Run (once) to allow nice html output as report (optional) \"\"\" Hide code cells in an IPython notebook or exported HTML using javascript. \"\"\" import IPython.core.display as di # This line will hide code by default when the notebook is exported as HTML di . display_html ( '<script>jQuery(function() {if (jQuery(\"body.notebook_app\").length == 0) { jQuery(\".input_area, .output_stderr\").toggle(); jQuery(\".prompt\").toggle();}});</script>' , raw = True ) CSS = \"\"\".input_area .output_stderr {height: 2.0em; overflow: hidden}\"\"\" # changes input_subarea width to 1 visible line HTML ( '<style> {} </style>' . format ( CSS )) # This line will add a button to toggle visibility of code blocks, for use with the HTML export version. di . display_html ( '''<button onclick=\"jQuery('.input_area').toggle(); jQuery('.prompt').toggle();\">Click in rendered .html output only, toggles the code</button>''' , raw = True ) We can toggle visibility of the code in the html report (rendered output) displayed in the browser. To remove the code completely, one can add a Jinja2 template into nbconvert-templates directory. For example, create file report.tpl with the following content and place it into the html directory under template folder 6 . {%- extends 'full.tpl' -%} {%-block input_group scoped-%} {%- if 'jupyter:' and cell.cell_type == 'code'-%} {%- endif -%} {%-endblock input_group -%} The full default path to your Jupyter templates is: # In my case C : / miniconda3 / envs / [ my_environment ] / Lib / site - packages / nbconvert / templates / html # or in general your_Python_path / Lib / site - packages / nbconvert / templates / html Then add the following cell at the end of your Jupyter notebook: # Create output with a template. Input code is removed from nbconvert import HTMLExporter import codecs import os # Prepare a date/time stamp to prepend to the report filename stamp = datetime . today () . strftime ( \"%m_ %d _%Y\" ) exporter = HTMLExporter ( template_file = 'report.tpl' ) output , resources = exporter . from_filename ( 'Sample_ipynb.ipynb' ) new_fnm = stamp + '_sample_report.html' codecs . open ( new_fnm , 'w' , encoding = 'utf-8' ) . write ( output ) In this particular case, file called sample_report.html with prepended date-stamp will be created in your notebook directory. Now, for the completeness, we can add one more cell with code to remove the color: #000 !important line from the html file: # Delete 'print B&W' instruction in css/style section program = open ( new_fnm , \"r\" ) lines = program . readlines () program . close () f = open ( stamp + '_sample_report_print.html' , \"w\" ) for line in lines : if not line . startswith ( ' color: #000 !important' ): f . write ( line ) f . close () os . remove ( new_fnm ) Here is the rendered version of the notebook just before printing with link to complete html file: sample_report_print Fig. 6. Final report at the print stage. Other ways to create reports To further customize the appearance of the report, html file without the code cells and stripped of the color: #000 !important line, the file is first rendered in the browser, its content selected (ctrl+a, ctrl+c) and pasted into new MS Word (Google Docs) document. The style of paragraphs and tables can be changed in the word editor. At this point, we should be very close to the final report style with a much improved visual appeal. References: Jessica Yung, Converting Jupyter Notebooks to PDFs ↩ GitHub, Color printing should be an option ↩ Ilho Song, Mid the Gap ↩ Max Masnick, how-to-hide-code-from-cells-in-ipython-notebook-visualized-with-nbviewer ↩ Jörg Dietrich, Blogging with IPython and Collapsible Input Cells ↩ Gregory Ashton, Ipython NBConvert latex template to hide code ↩","tags":"Jupyter","url":"https://marpat.github.io/jupyter-notebook-html-report.html","loc":"https://marpat.github.io/jupyter-notebook-html-report.html"}]};