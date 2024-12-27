# ASYNCHRONOUS JAVASCRIPT

## Announcements :loudspeaker:

1. Merry Christmas Guys !!
    * Enjoy and Cake Khao
    * Aur Vote karna na bhule Bhaiyo aur Behno
2. Prerequisites:
    * Functions :
        * Named and Anonymous Function
        * Normal Function and Arrow Function
        * Javascript Runtime

## Upcoming Calendar 📆

* Next Class: GSOC 2025, 30 Dec 2024

## Topics To Be Covered 🧑🏻‍💻

* Async
    * jhk
    * October: $4.0k (invoice)
    * November: $4.3k (invoice)
    * December: $2.4k (forecast at $4.6k ⚠️)
       * Increase due to outbound bandwidth (~$10 daily additionals)
        * Potential $266 monthly saving with the cert.ci, trusted.ci and puppet VM sizing (~$8 daily savings)
        * Potential savings by grouping file storages into a single NFS (get.jio + updates.jio + geoipupdate)
* Await
    * September: $10.4k consumed
    * October: $12.9k consumed
    * November: $13k
    * December: $5.9k (forecast at $10.8k)
* Callbacks
    * September: $158 (invoice)
    * October: $195.67 (invoice) 
    * November: $146 (invoice)
    * December: $101 (forecast at $185)
* Promises
    * CloudBees:
        * August: $6.3k
        * September: $6.1k
        * October: $6.4k
        * November: $3.9k
        * December: $283 (forecast at $557)
    * Sponsored account (~$58k credits lefts)
        * October: $178 
        * November: $482
        * December: $246 (forecast at $516)

## Additional Topics

* Quick not-so-off-topic - JCP meeting on Dec 17 and JEP-14 feedback
    * Java Community Process - caring for Java Enhancement Proposals
    * Working group that focuses on technical topics
    * Tip and Tail - how Java version things, how libraries version things
        * Mark to attend session and share Jenkins 2+2+2
* Jenkins and Develocity FOSS sponsorship - is there still potential interest - 
  * https://github.com/gradle/develocity-oss-projects
  * "Develocity open source sponsorship for Jenkins CI instances" - thread in  jenkins-infra@googlegroups.com - https://groups.google.com/g/jenkins-infra/c/KveP8_0b3zk/m/FjlfcFm2BQAJ 
    * Develocity - distributed build caching, build scans, predictive test selection (might overlap with CloudBees' offering being deployed), etc.
    * Some first metrics for Jenkins plugins are nice (4x build boost for a Maven based plugin), but a champion is needed to explore further. Oleg has a CoI as a Gradle employee
    * The opportunity is still there, not sure about the budget allocation. If there is no follow-up, Gradle will definitely move on.
    * Damien: interested in the infra part
    * Oleg to follow-up with Damien in January-ish. Some technical details would be needed
* AWS account use for AWS Java SDK v2 work - [JENKINS-73638](https://issues.jenkins.io/browse/JENKINS-73638)
    * Jenkins infra is very interested in the AWS improvements
        * Concerned about the EC2 plugin already
    * Can allocate one or more developers an IAM profile on a distinct region
        * Will need to predict the needed resources for that IAM profile
        * What is need to start that process?
            * Create a help desk ticket with the list of users and the use case
                * Infra will generate the credentials and share them securely with the contributors
            * May need a workshop session at Contributor Summit on AWS Java SDK v2

## Notes :book:

* [Done](https://github.com/jenkins-infra/helpdesk/milestone/140?closed=1):
    * Support
        * [Request to archive protecode-sc-plugin repo](https://github.com/jenkins-infra/helpdesk/issues/4448)
        * [Garbage Collector on azure a little too aggresive](https://github.com/jenkins-infra/helpdesk/issues/4445)
        * [Artifactory permission issue since `plugin-modernizer-tool` was moved to `jenkins-infra` ](https://github.com/jenkins-infra/helpdesk/issues/4443)
    * Keep platform up to date
        * [[Update Center] Add archives.jenkins.io as a mirror fallback for JSON metadatas](https://github.com/jenkins-infra/helpdesk/issues/4401)
        * [Refine updatecli to not propose www.bing.com version updates](https://github.com/jenkins-infra/helpdesk/issues/4438)
        * [change the stage view to pipeline graph view on infra.ci](https://github.com/jenkins-infra/helpdesk/issues/4435)
    * GeoIP Update
        * [[get.jenkins.io/updates.jenkins.io] mirrors system keep loosing ability to evaluate client IP locations](https://github.com/jenkins-infra/helpdesk/issues/4441)
        * [cleaning and changing the cron for geoip updater cronjob](https://github.com/jenkins-infra/helpdesk/issues/4436)

* [Closed as not planned](https://github.com/jenkins-infra/helpdesk/milestone/140?closed=1):
    * [register account](https://github.com/jenkins-infra/helpdesk/issues/4449)

* [Work in Progress](https://github.com/jenkins-infra/helpdesk/milestone/140):
    * Update Center ([[INFRA-3100] Migrate updates.jenkins.io to another Cloud](https://github.com/jenkins-infra/helpdesk/issues/2649))
        * Decommission the old apache vhost and associated data on pkg VM

    * [[AWS] Move ci.jenkins.io from Azure (sponsorship) to AWS (sponsorship)](https://github.com/jenkins-infra/helpdesk/issues/4313)
        * Good news: AWS support agreed to increase our vCPU quotas (after an initial refusal). We can now have 2000 vCPUs
        * [[ci.jenkins.io] Create private EKS cluster with "side" services (datadog, ACP, etc.)](https://github.com/jenkins-infra/helpdesk/issues/4319)
            * Cluster is up with 1 node group
            * Credentials and access is OK (VPN or infra.ci agents)
            * WiP on setting up helm releases
        * [[ci.jenkins.io] Move ephemeral VM agents to AWS](https://github.com/jenkins-infra/helpdesk/issues/4316)
            * It works with Puppet full setup!
            * Main issue: SSD setup
                * Default AMI block storage is used. From gp2 to gp3 => 450 IOPS => 3000 IOPs. But 125 Mb/s
                * Slower than Azure VM agents today for reason: Azure uses local NVMe storage
                * Require benchmarking, which require.. ACP.
            * Next: Windows agents
            * Next: Spot agents
        * [[ci.jenkins.io] Move controller (VM) to AWS](https://github.com/jenkins-infra/helpdesk/issues/4315)
            * Blocked by agents
    
    * ACP
        * [Instability of artifact-caching-proxy](https://github.com/jenkins-infra/helpdesk/issues/4442)
            * All errors were Artifactory side
            * For the BOM: partial fix using the new "pre-heat" technique. Not generalizable though.
            * Client side solution might bee needed, or agent-side
        * [build failure with useArtifactCachingProxy=true and dependency with version range](https://github.com/jenkins-infra/helpdesk/issues/4426)
    
    * Monitoring private builds (Delay to January)
        * [Monitor builds on our private instances (trusted.ci.jenkins.io / infra.ci.jenkins.io / release.ci.jenkins.io)](https://github.com/jenkins-infra/helpdesk/issues/2843)
        * [Add monitoring for CD secrets updates](https://github.com/jenkins-infra/helpdesk/issues/4383)
    
    * Support
        * [Foreign releases in public repository](https://github.com/jenkins-infra/helpdesk/issues/4444)
        * [dnf5 update fails with gpgcheck=1](https://github.com/jenkins-infra/helpdesk/issues/4429)
        * [External user struggling to submit story to stories.jenkins.io](https://github.com/jenkins-infra/helpdesk/issues/4392)
        * [Infra stats missing since October 2024 data for stats.jenkins.io Plugin Installation Trend feature](https://github.com/jenkins-infra/helpdesk/issues/4386)
        * [Maven Central artifacts are being downloaded from repo.jenkins-ci.org](https://github.com/jenkins-infra/helpdesk/issues/4385)
    
    * Keep platform up to date

* New Issues/to triage:
  * [[Update Center] HTTP/404 on `/current/updates/*.json*` links](https://github.com/jenkins-infra/helpdesk/issues/4432)
      * Edge case, delayed to January
  * [(packer-images): Add Win-19, Win-22 (AMD64 and ARM64) AMIs For EC2 agents](https://github.com/jenkins-infra/helpdesk/issues/4354)
      * Adding to new milestone
  * [[ci.jenkins.io] Set up an ECR pull through cache](https://github.com/jenkins-infra/helpdesk/issues/4321)
      * Adding to new milestone
  * [[ci.jenkins.io] Move ACI agents to ephemeral Windows containers to AWS](https://github.com/jenkins-infra/helpdesk/issues/4318)
  * [[ci.jenkins.io] Move ephemeral Linux containers to AWS](https://github.com/jenkins-infra/helpdesk/issues/4317)
  * [Switch agent (java home) to JDK21 default](https://github.com/jenkins-infra/helpdesk/issues/4127)
  * [Switch default JDK to 21 for pipeline libraries](https://github.com/jenkins-infra/helpdesk/issues/4126)
  * [Switch default JDK to 21 for build tools](https://github.com/jenkins-infra/helpdesk/issues/4125)
  * [Move controllers to JDK21 (runtime)](https://github.com/jenkins-infra/helpdesk/issues/4123)
  * [Move agents to JDK21 (runtime)](https://github.com/jenkins-infra/helpdesk/issues/4121)
  * [[INFRA-2651] Replace accountapp with (keycloak? Go-authentik? Something Else?)](https://github.com/jenkins-infra/helpdesk/issues/2232)

* ToDo (next milestones):
    * https://github.com/jenkins-infra/helpdesk/milestone/140
    * https://github.com/jenkins-infra/helpdesk/milestone/141

## Action Points :muscle:

<!-- How To: https://github.com/jenkins-infra/runbooks/tree/main/meetings -->
* [x] Publish this meeting note on [jenkins-infra/documentation](https://github.com/jenkins-infra/documentation) 
* [x] Publish this meeting record on Youtube - https://youtu.be/Q1cJSse9iYA
* [x] Publish a topic in community.jenkins.io with the tag `meeting` - https://community.jenkins.io/t/infrastructure-team-meeting-december-17-2024/24893

Next meeting note - [2025-01-07](https://github.com/jenkins-infra/documentation/blob/main/meetings/2025-01-07.md) 