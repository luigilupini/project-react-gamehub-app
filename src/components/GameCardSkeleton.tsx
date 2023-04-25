import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GameCardSkeleton() {
  return (
    <Card height="100%">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
