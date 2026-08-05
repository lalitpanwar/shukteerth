import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

import StoryHeader from "./StoryHeader";
import StoryStickyImage from "./StoryStickyImage";
import StoryItem from "./StoryItem";

import { stories } from "./story-data";

export default function Storytelling() {
  return (
    <>
      <StoryHeader />

      <Section className="bg-brand-ivory">
        <Container>

          <div className="grid gap-20 lg:grid-cols-12">

            {/* Left */}

            <div className="hidden lg:col-span-5 lg:block">
              <StoryStickyImage />
            </div>

            {/* Right */}

            <div className="lg:col-span-7">

              {stories.map((story, index) => (
                <StoryItem
                  key={story.id}
                  {...story}
                  last={index === stories.length - 1}
                />
              ))}

            </div>

          </div>

        </Container>
      </Section>
    </>
  );
}