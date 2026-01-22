---
title: CVE process background
---

One of the responsibilities of the TSC is in helping deal with security
incidents. TSC emeritus Andi Marek has written the following background to the
CVE process:

---

As some documentation for the TSC, here is some background and experience
regarding CVEs.

CVEs are maintained and organized by
https://en.m.wikipedia.org/wiki/Mitre_Corporation which is a US founded
organization.

Everybody can file a CVE against projects via https://cveform.mitre.org/

Then a CNA (https://www.cve.org/ProgramOrganization/CNAs) picks up the report
and creates a CVE record for it.

The problem with that process is that everybody can file a CVE and often a CNA
without enough knowledge or interest create a CVE which doesn't reflect the
vulnerability accurately or sometimes is not even a real vuln.

Some open source projects had some bad experiences with it in the recent past
and decided to take action by becoming their own CNA. For example the curl
project did this: https://daniel.haxx.se/blog/2024/01/16/curl-is-a-cna/

Here is another example for a wrong CVE filed against a popular project:
https://www.joda.org/joda-time/security.html

GraphQL Java is also in the process of becoming a CNA so that we can manage all
CVEs affecting us.

I would recommend that GraphQL also registers as CNA. I can share more details
on that later.

Once a CVE is filed security vendors pick it up and create their own records to
indicate that a library needs to be updated to a certain version, if a fix is
available. (Example
https://security.snyk.io/vuln/SNYK-JAVA-COMGRAPHQLJAVA-5291199 ). In the
enterprise world it means that a lot of automated alerts go off forcing updates.
Overall a CVE creates a lot of (distributed) work worldwide.

A CVE can be updated and amended after it was created, but our experience is not
great in doing that. It is best if you (or somebody else) files a CVE that for
example a bug fix release is already available.
